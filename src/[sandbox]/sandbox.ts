/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * ATTENTION: Apps using this widget must provide the following values from the application configuration.
 * These details allow easy and discreet generation of SAS tokens with correct permissions needed to access the API.
 */

// @ts-ignore
const BASE_URL = process.env.DOTENV.BASE_URL;

// @ts-ignore
const IDENTITY = process.env.DOTENV.IDENTITY;

import "@momentum-ui/web-components";
import "@cjaas/common-components";
import { customElement, html, internalProperty, LitElement } from "lit-element";
import styles from "./sandbox.scss";
import "..";
import { mockedInteractionData } from "./sandbox.mock";
import home from "@img/home.png";
import axios from "axios";

@customElement("cjaas-component-sandbox")
export class Sandbox extends LitElement {
  @internalProperty() darkTheme = false;
  @internalProperty() containerWidth = "80vw";
  @internalProperty() containerHeight = "80vh";
  @internalProperty() selectedComponent = "Activity Item";
  @internalProperty() isLoggedIn = !!localStorage.getItem("webex-access-token");
  @internalProperty() isProjectSettingsAdded = false;
  @internalProperty() projectId: string | null = null;
  @internalProperty() organizationId: string | null = null;

  static get styles() {
    return styles;
  }

  connectedCallback() {
    super.connectedCallback();

    // Check if there's an access token in the URL
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get("access_token");

    if (accessToken) {
      // Save the access token to localStorage
      localStorage.setItem("webex-access-token", accessToken);

      this.dispatchEvent(new CustomEvent("sign-in", { detail: { login: true }, bubbles: true, composed: true }));

      // Remove the access token from the URL to avoid exposing it in the browser history
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Check if the user is logged in based on the presence of the access token
    this.isLoggedIn = !!localStorage.getItem("webex-access-token");

    if (this.isLoggedIn) {
      window.history.replaceState({}, document.title, "/");
    }
  }

  themeToggle() {
    return html`
      <div class="toggle-container">
        <md-checkbox
          type="checkbox"
          id="theme-switch"
          class="theme-switch"
          data-aspect="darkTheme"
          label="Dark Mode"
          @checkbox-change=${(e: MouseEvent) => this.toggleSetting(e)}
          ?checked=${this.darkTheme}
          >Dark Mode</md-checkbox
        >
      </div>
    `;
  }

  toggleSetting(e: MouseEvent) {
    const composedPath = e.composedPath();
    const target = (composedPath[0] as unknown) as HTMLInputElement;
    const aspect: string = target.dataset.aspect!;
    if (aspect === "responsive-width") {
      this.containerWidth = target.value;
    } else if (aspect === "responsive-height") {
      this.containerHeight = target.value;
    } else if (aspect === "darkTheme") {
      this.darkTheme = !this.darkTheme;
    } else return console.error("Invalid data-aspect input");
  }

  renderHeader() {
    return html`
      <div class="widget-header">
        <img class="logo" src=${home} alt="Logo" />
        <button class="sign-out" @click="${this.signOut}">Sign Out</button>
      </div>
    `;
  }

  renderWidget() {
    const containerStyle = `width: ${this.containerWidth}; height: ${this.containerHeight};`;

    return html`
      <md-theme ?darkTheme=${this.darkTheme} lumos>
        ${this.renderHeader()}
        <div class="container">
          <h2 class="sandbox-header">Customer Journey Live View</h2>
          <div style=${containerStyle} class="widget-container">
            <customer-journey-widget
              .bearerToken=${localStorage.getItem("webex-access-token")}
              base-url=${BASE_URL}
              .organizationId=${this.organizationId}
              .interactionData=${mockedInteractionData("INBOUND", IDENTITY)}
              project-id=${this.projectId}
              logs-on
            ></customer-journey-widget>
          </div>
        </div>
      </md-theme>
      <div class="toggle">
        ${this.themeToggle()}
      </div>
    `;
  }

  hideLogin() {
    this.isLoggedIn = true;
  }

  showLogin() {
    this.isLoggedIn = false;
  }

  signOut() {
    // Remove the access token from localStorage
    localStorage.removeItem("webex-access-token");

    // Set isLoggedIn to false
    this.isLoggedIn = false;

    // Dispatch a custom event named 'sign-out'
    this.dispatchEvent(new CustomEvent("sign-out"));
  }

  renderLogin() {
    window.history.pushState({}, "Login", "/login");
    return html`
      <login-component @sign-in="${this.hideLogin}" @sign-out="${this.showLogin}"></login-component>
    `;
  }

  renderLogOut() {
    return html`<button @sign-in="${this.hideLogin}" @sign-out="${this.showLogin}"></login-component>`;
  }

  onChangeProjectId(event: CustomEvent) {
    const value = event.detail.value;
    this.projectId = value;
  }

  onChangeOrganizationId(event: CustomEvent) {
    const value = event.detail.value;
    this.organizationId = value;
  }

  handleSubmitSettings() {
    if (this.projectId && this.organizationId) {
      // Append parameters to the query string
      const url = new URL(window.location.href);
      url.searchParams.set("projectId", this.projectId);

      // Replace the current URL with the updated URL
      window.history.replaceState({}, document.title, url.toString());

      this.isProjectSettingsAdded = true;
    }
  }

  renderProjectSettings() {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("webex-access-token"),
    };
    axios.get("https://webexapis.com/v1/people/me", { headers }).then(r => {
      console.log(r.data);
      console.log(atob(r.data.orgId));
      const orgIds = atob(r.data.orgId).split("/");
      this.organizationId = orgIds[orgIds.length - 1];
    });
    return html`
      ${this.renderHeader()}
      <div class="container">
        <div class="flex-inline">
          <div class="input-wrapper">
            <md-input
              label="Project Id"
              class="customer-journey-search-input"
              id="project-input"
              value=${this.projectId || ""}
              shape="pill"
              @input-change=${(event: CustomEvent) => this.onChangeProjectId(event)}
            >
            </md-input>

            <button class="primary-button" @click=${this.handleSubmitSettings}>
              Submit
            </button>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    /** Update .env file
     * PRIVATE_KEY
     * BASE_URL
     * ORGANIZATION_ID
     * PROJECT_ID
     * TEMPLATE_ID
     * IDENTITY
     */

    if (!this.isLoggedIn) return this.renderLogin();

    if (!this.isProjectSettingsAdded) return this.renderProjectSettings();

    return this.isLoggedIn ? this.renderWidget() : this.renderLogin();
  }
}
