import { LitElement, html, css, customElement } from 'lit-element';
import { webexAuthService } from '../services/webex-auth-service';
import "@momentum-ui/web-components";
import "@cjaas/common-components";
import styles from "./login.scss";
import home from "@img/home.png"

@customElement('login-component')
export class LoginComponent extends LitElement {
  static get styles() {
    return styles;
  }



 
  render() {
    return html`
      <div class="container">
        <div class="header">
          <img class="logo" src=${home} alt="Logo">
          <button class="smallButton" @click=${() => this.handleLogin()}>Login</button>
        </div>
        <!-- Login button centered on the screen -->
        <button class="button" @click=${() => this.handleLogin()}>Login with Webex</button>
      </div>
    `;
  }

  private handleLogin() {
    webexAuthService.initiateLogin();
  }

}




