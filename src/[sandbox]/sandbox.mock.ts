/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const mockedInteractionData = (contactDirection: "INBOUND", ani: string, dnis?: string) => {
  return {
    mediaType: "telephony",
    mediaChannel: "broadcloud",
    queueId: "AXj7J67QX-tU5CjVIxNA",
    ani,
    orgId: "12700722-cd25-46b9-971e-ed0ce9f140c6",
    isFcManaged: true,
    owner: "7520516a-3583-42c0-9ebc-186feb9e07cc",
    interactionId: "897433e1-82f4-4c65-95e4-b1aeb92778ec",
    mediaResourceId: "897433e1-82f4-4c65-95e4-b1aeb92778ec",
    state: "connected",
    destAgentId: "",
    consultHold: false,
    consultMediaResourceId: "",
    isTerminated: false,
    agentId: "7520516a-3583-42c0-9ebc-186feb9e07cc",
    ownerName: "Agent1 Demo",
    ownerPhoneNumber: "12263762555",
    isWrapUp: false,
    hasJoined: true,
    isOffered: true,
    dnis: "+15165179312",
    phoneNumber: "+18505598991",
    virtualTeamName: "bmclella_voice_Q",
    ronaTimeout: "22",
    isConferencing: false,
    isRecordingPaused: false,
    isRecorded: false,
    isPauseResumeEnabled: false,
    contactDirection,
    outboundType: null,
    isHold: false,
    ctqInProgress: false,
    outdialTransferToQueueEnabled: false,
    timeStamp: 1682712932773,
    consultTimeStamp: 1682712932773,
    wrapUpTimestamp: null,
    holdTimestamp: null,
    consultHoldTimestamp: null,
    callAssociatedData: {
      Address: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Address",
        global: false,
        isSecure: false,
        name: "Address",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "531 NW 36TH CT",
      },
      AgentLoginID: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Last Agent",
        global: false,
        isSecure: false,
        name: "AgentLoginID",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "bmclella_agent1@email.carehybrid.com",
      },
      CAD_Open: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Call Center Status",
        global: false,
        isSecure: false,
        name: "CAD_Open",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "Open",
      },
      CaliforniaStatus: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Florida Online",
        global: false,
        isSecure: false,
        name: "CaliforniaStatus",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "online",
      },
      CallDeflected: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Caller Deflected To",
        global: true,
        isSecure: false,
        name: "CallDeflected",
        reportable: true,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "Voice",
      },
      CaseStatus: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Status",
        global: false,
        isSecure: false,
        name: "CaseStatus",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "Review",
      },
      City: {
        agentEditable: true,
        agentViewable: true,
        displayName: "City",
        global: false,
        isSecure: false,
        name: "City",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "Cleveland",
      },
      Email: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Email",
        global: false,
        isSecure: false,
        name: "Email",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "mclellandemo@gmail.com",
      },
      "FC-DESKTOP-VIEW": {
        agentEditable: false,
        agentViewable: true,
        displayName: "",
        global: false,
        isSecure: false,
        name: "FC-DESKTOP-VIEW",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value:
          '{"pop-over":[{"name":"ani","variableSeq":"0"},{"name":"dn","variableSeq":"1"},{"name":"virtualTeamName","variableSeq":"2"},{"name":"OrginalChannel","variableSeq":"3"},{"name":"AgentLoginID","variableSeq":"4"}],"interaction-panel":[{"name":"FirstName","variableSeq":"0"},{"name":"LastName","variableSeq":"1"},{"name":"Address","variableSeq":"2"},{"name":"Email","variableSeq":"3"},{"name":"City","variableSeq":"4"},{"name":"State","variableSeq":"5"},{"name":"Issue","variableSeq":"6"},{"name":"CaseStatus","variableSeq":"7"},{"name":"ani","variableSeq":"8"},{"name":"dn","variableSeq":"9"},{"name":"virtualTeamName","variableSeq":"10"},{"name":"CallDeflected","variableSeq":"11"},{"name":"Global_Language","variableSeq":"12"},{"name":"Global_FeedbackSurveyOptIn","variableSeq":"13"}]}',
      },
      FCR: {
        agentEditable: true,
        agentViewable: true,
        displayName: "FCR",
        global: true,
        isSecure: false,
        name: "FCR",
        reportable: true,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "BOOLEAN",
        value: "false",
      },
      FirstName: {
        agentEditable: true,
        agentViewable: true,
        displayName: "First Name",
        global: false,
        isSecure: false,
        name: "FirstName",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "Barry",
      },
      Global_FeedbackSurveyOptIn: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Post Call Survey Opt-in",
        global: true,
        isSecure: false,
        name: "Global_FeedbackSurveyOptIn",
        reportable: true,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "uninitialized",
      },
      Global_Language: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Customer Language",
        global: true,
        isSecure: false,
        name: "Global_Language",
        reportable: true,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "en-US",
      },
      Issue: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Issue",
        global: false,
        isSecure: false,
        name: "Issue",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "AbsentNotify",
      },
      LastName: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Last Name",
        global: false,
        isSecure: false,
        name: "LastName",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "McLellan",
      },
      MichiganStatus: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Michigan Online",
        global: false,
        isSecure: false,
        name: "MichiganStatus",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "online",
      },
      Name: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Name",
        global: false,
        isSecure: false,
        name: "Name",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "",
      },
      OrginalChannel: {
        agentEditable: false,
        agentViewable: true,
        displayName: "Escalation From Channel",
        global: false,
        isSecure: false,
        name: "OrginalChannel",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "",
      },
      State: {
        agentEditable: true,
        agentViewable: true,
        displayName: "State",
        global: false,
        isSecure: false,
        name: "State",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "Ohio",
      },
      ani: {
        agentEditable: false,
        agentViewable: true,
        displayName: "ani",
        global: false,
        isSecure: false,
        name: "ani",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "+18505598991",
      },
      dateDate: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Current Date",
        global: false,
        isSecure: false,
        name: "dateDate",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "YYYYMMDD",
      },
      dateDateTime: {
        agentEditable: true,
        agentViewable: true,
        displayName: "DateTime",
        global: false,
        isSecure: false,
        name: "dateDateTime",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "2021-06-09T08:53",
      },
      dateDayOfTheWeek: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Day Of The Week",
        global: false,
        isSecure: false,
        name: "dateDayOfTheWeek",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: " ",
      },
      dn: {
        agentEditable: false,
        agentViewable: true,
        displayName: "dn",
        global: false,
        isSecure: false,
        name: "dn",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "+15165179312",
      },
      ronaTimeout: {
        agentEditable: false,
        agentViewable: true,
        displayName: "ronaTimeout",
        global: false,
        isSecure: false,
        name: "ronaTimeout",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "22",
      },
      sLat: {
        agentEditable: false,
        agentViewable: true,
        displayName: "lat",
        global: false,
        isSecure: false,
        name: "sLat",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "30.418668888889",
      },
      sLong: {
        agentEditable: false,
        agentViewable: true,
        displayName: "long",
        global: false,
        isSecure: false,
        name: "sLong",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "-86.61346",
      },
      timeHours: {
        agentEditable: true,
        agentViewable: true,
        displayName: "timeHours",
        global: false,
        isSecure: false,
        name: "timeHours",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "INTEGER",
        value: "0",
      },
      timeTime: {
        agentEditable: true,
        agentViewable: true,
        displayName: "Time",
        global: false,
        isSecure: false,
        name: "timeTime",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: " ",
      },
      virtualTeamName: {
        agentEditable: false,
        agentViewable: true,
        displayName: "virtualTeamName",
        global: false,
        isSecure: false,
        name: "virtualTeamName",
        reportable: false,
        secureKeyId: "",
        secureKeyVersion: 0,
        type: "STRING",
        value: "bmclella_voice_Q",
      },
    },
    hasCustomerLeft: false,
    isConvNotFound: false,
    isOwner: true,
    EpDnConsultDestinationAgentJoined: false,
    isSecondaryEpDnAgent: false,
    monitoringStartTime: 1682712932773,
    type: "AgentContactAssigned",
    isMonitoringOnHold: false,
    monitoringHoldTimer: 1682712932252,
  };
};

export const mockedProfileViewPayload = {
  meta: {
    orgId: "a5b3eae5-f59a-4b4d-bfbb-8f06b32d91f7",
  },
  data: [
    {
      name: "journey-default-template",
      personId: "egiere@cisco.com",
      searchFilter: "",
      generatedAt: "2022-05-12T18:31:44.275Z",
      attributeView: [
        {
          queryTemplate: {
            version: "0.1",
            event: "cjds:any",
            metadataType: "string",
            metadata: "firstName",
            limit: 1,
            displayName: "First Name",
            lookbackDurationType: "days",
            lookbackPeriod: 50,
            aggregationMode: "Value",
            eventDataAggregators: null,
            widgetAttributes: {
              type: "table",
            },
            verbose: false,
          },
          result: "Elena",
          error: null,
          journeyEvents: null,
          hasError: false,
        },
        {
          queryTemplate: {
            version: "0.1",
            event: "cjds:any",
            metadataType: "string",
            metadata: "lastName",
            limit: 1,
            displayName: "Last Name",
            lookbackDurationType: "days",
            lookbackPeriod: 50,
            aggregationMode: "Value",
            eventDataAggregators: null,
            widgetAttributes: {
              type: "table",
            },
            verbose: false,
          },
          result: "Giere",
          error: null,
          journeyEvents: null,
          hasError: false,
        },
        {
          queryTemplate: {
            version: "0.1",
            event: "cjds:any",
            metadataType: "string",
            metadata: "phone",
            limit: 1,
            displayName: "Phone",
            lookbackDurationType: "days",
            lookbackPeriod: 50,
            aggregationMode: "Value",
            eventDataAggregators: null,
            widgetAttributes: {
              type: "table",
            },
            verbose: false,
          },
          result: "+180092347891",
          error: null,
          journeyEvents: null,
          hasError: false,
        },
        {
          queryTemplate: {
            version: "0.1",
            event: "cjds:any",
            metadataType: "string",
            metadata: "email",
            limit: 1,
            displayName: "Email",
            lookbackDurationType: "days",
            lookbackPeriod: 50,
            aggregationMode: "Value",
            eventDataAggregators: null,
            widgetAttributes: {
              type: "table",
            },
            verbose: false,
          },
          result: "egiere@cisco.com",
          error: null,
          journeyEvents: null,
          hasError: false,
        },
        {
          queryTemplate: {
            version: "0.1",
            event: "cjds:any",
            metadataType: "string",
            metadata: "address",
            limit: 1,
            displayName: "Address",
            lookbackDurationType: "days",
            lookbackPeriod: 50,
            aggregationMode: "Value",
            eventDataAggregators: null,
            widgetAttributes: {
              type: "table",
            },
            verbose: false,
          },
          result: "1 Bush St #1300, San Francisco, CA 94104",
          error: null,
          journeyEvents: null,
          hasError: false,
        },
      ],
    },
  ],
};

export const profileMock = [
  {
    query: {
      version: "0.1",
      event: "Quote",
      metadata: "email",
      displayName: "Email",
      aggregationMode: "Value",
      type: "tab",
      tag: "email",
      limit: 1,
      Verbose: true,
    },
    result: ["v3nki"],
    journeyevents: [
      {
        data: {
          firstName: "Venki",
          lastName: "V",
          email: "v3nki",
        },
        dataContentType: "application/json",
        id: "9cc22087-284d-46db-9e4e-fa7ed9723976",
        person: "560021-Venki",
        source: "Website",
        specVersion: "1.0",
        time: "2021-03-05T19:00:05.596Z",
        type: "Quote",
      },
    ],
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      metadata: "Make",
      displayName: "Make",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    result: [""],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      metadata: "Model",
      displayName: "Model",
      limit: 1,
      aggregationMode: "Value",
      type: "table",
    },
    result: [""],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      metadata: "License Plate",
      displayName: "License Plate",
      limit: 1,
      aggregationMode: "Value",
      type: "table",
    },
    result: [""],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      metadata: "ltv",
      displayName: "LTV",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    result: [""],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      metadata: "name",
      displayName: "First Name",
      limit: 1,
      aggregationMode: "Value",
      tag: "name",
      type: "inline",
    },
    result: ["Venki"],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      limit: 1,
      metadata: "zipCode",
      displayName: "Zip Code",
      aggregationMode: "Value",
      type: "table",
    },
    result: [""],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      metadata: "street",
      displayName: "Street",
      limit: 1,
      aggregationMode: "Value",
      type: "table",
    },
    result: ["street1"],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      limit: 1,
      metadata: "apt",
      displayName: "Apt",
      aggregationMode: "Value",
      type: "table",
    },
    result: ["apt1"],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      event: "Quote",
      limit: 1,
      metadata: "city",
      displayName: "City",
      aggregationMode: "Value",
      type: "table",
    },
    result: ["bengaluru"],
    journeyevents: null,
  },
  {
    query: {
      version: "0.1",
      limit: 1,
      event: "Quote",
      metadata: "lastName",
      displayName: "Last Name",
      aggregationMode: "Value",
      tag: "name",
      type: "inline",
    },
    result: ["V"],
    journeyevents: null,
  },
];

export const profileViewMockTemplate = {
  Name: "Test Template 2",
  DatapointCount: 100,
  Attributes: [
    {
      version: "0.1",
      event: "Quote",
      metadata: "email",
      displayName: "Email",
      metadataType: "string",
      aggregationMode: "Value",
      type: "tab",
      limit: 1,
      tag: "email",
    },
    {
      version: "0.1",
      event: "Quote",
      metadata: "Make",
      metadataType: "string",
      displayName: "Make",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    {
      version: "0.1",
      event: "Quote",
      metadataType: "string",
      metadata: "Model",
      displayName: "Model",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    {
      version: "0.1",
      metadataType: "string",
      event: "Quote",
      metadata: "ltv",
      displayName: "LTV",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    {
      version: "0.1",
      metadataType: "string",
      event: "Quote",
      metadata: "License Plate",
      displayName: "License Plate",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    {
      version: "0.1",
      metadataType: "string",
      event: "Quote",
      metadata: "firstName",
      displayName: "First Name",
      aggregationMode: "Value",
      tag: "name",
      limit: 1,
      type: "inline",
    },
    {
      version: "0.1",
      event: "Entered ZipCode",
      metadataType: "string",
      metadata: "zipCode",
      displayName: "Zip Code",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    {
      version: "0.1",
      event: "Quote",
      metadataType: "string",
      metadata: "street",
      displayName: "Street",
      aggregationMode: "Value",
      limit: 1,
      type: "table",
    },
    {
      version: "0.1",
      event: "Quote",
      metadataType: "string",
      metadata: "apt",
      displayName: "Apt",
      limit: 1,
      aggregationMode: "Value",
      type: "table",
    },
    {
      version: "0.1",
      event: "Quote",
      metadata: "city",
      displayName: "City",
      metadataType: "string",
      limit: 1,
      aggregationMode: "Value",
      type: "table",
    },
    {
      version: "0.1",
      event: "Quote",
      metadataType: "string",
      limit: 1,
      metadata: "lastName",
      displayName: "Last Name",
      aggregationMode: "Value",
      tag: "name",
      type: "inline",
    },
  ],
};

export const mockedTimelineItems: any = [
  {
    data: {
      firstName: "Jackson",
      lastName: "Browne",
      email: "jackson@gmail.com",
    },
    id: "mock22087-284d-46db-9e4e-0001",
    title: "Add To Cart",
    person: "560021-Venki",
    timestamp: "2021-02-16T05:00:05.596Z",
  },
  {
    data: {
      firstName: "Led",
      lastName: "Zeppelin",
      email: "zeppelin@gmail.com",
    },
    id: "mock22087-284d-46db-9e4e-2222",
    title: "Add To Cart",
    person: "560021-Venki",
    timestamp: "2021-03-17T01:00:05.596Z",
  },
  {
    data: {
      firstName: "Tom",
      lastName: "Petty",
      email: "tom@gmail.com",
    },
    id: "mock22087-284d-46db-9e4e-1110",
    title: "Add To Cart",
    person: "560021-Venki",
    timestamp: "2021-03-20T13:00:05.596Z",
  },
  {
    data: {
      firstName: "Bruce",
      lastName: "Springsteen",
      email: "springsteen@gmail.com",
    },
    id: "mock22087-284d-46db-9e4e-8888",
    title: "Add To Cart",
    person: "560021-Venki",
    timestamp: "2021-03-20T12:00:05.596Z",
  },
  {
    data: {
      firstName: "Janis",
      lastName: "Joplin",
      email: "joplin@gmail.com",
    },
    id: "mock22087-284d-46db-9e4e-4555",
    title: "Add To Cart",
    person: "560021-Venki",
    timestamp: "2021-03-05T19:00:05.596Z",
  },
];

export const sampleTemplate = {
  Name: "Test Template 2",
  DatapointCount: 1000,
  Attributes: [
    {
      Version: "0.1",
      Event: "Quote",
      Metadata: "email",
      DisplayName: "Email",
      AggregationMode: "Value",
      type: "tab",
      tag: "email",
      Limit: 1,
    },
    {
      Version: "0.1",
      Event: "Quote",
      Metadata: "Make",
      DisplayName: "Make",
      AggregationMode: "Value",
      Limit: 1,
      type: "table",
    },
    {
      Version: "0.1",
      Event: "Quote",
      Metadata: "Model",
      DisplayName: "Model",
      Limit: 1,
      AggregationMode: "Value",
      type: "table",
    },
    {
      Version: "0.1",
      Event: "Quote",
      Metadata: "License Plate",
      DisplayName: "License Plate",
      Limit: 1,
      AggregationMode: "Value",
      type: "table",
    },
    {
      Version: "0.1",
      Event: "Quote",
      Metadata: "ltv",
      DisplayName: "LTV",
      AggregationMode: "Value",
      Limit: 1,
      type: "table",
      // eslint-disable-next-line prettier/prettier
      formatValue: (val: string) => {
        if (val) {
          return `$${val.match(/\d\d\d/g)?.join(",")}`;
        }

        return val;
      },
    },
    {
      Version: "0.1",
      Event: "Quote",
      Metadata: "firstName",
      DisplayName: "First Name",
      Limit: 1,
      AggregationMode: "Value",
      tag: "name",
      type: "inline",
    },
    {
      Version: "0.1",
      Event: "Quote",
      Limit: 1,
      Metadata: "zipCode",
      DisplayName: "Zip Code",
      AggregationMode: "Value",
      type: "table",
    },
    {
      Version: "0.1",
      Event: "Quote",
      Metadata: "street",
      DisplayName: "Street",
      Limit: 1,
      AggregationMode: "Value",
      type: "table",
    },
    {
      Version: "0.1",
      Event: "Quote",
      Limit: 1,
      Metadata: "apt",
      DisplayName: "Apt",
      AggregationMode: "Value",
      type: "table",
    },
    {
      Version: "0.1",
      Event: "Quote",
      Limit: 1,
      Metadata: "city",
      DisplayName: "City",
      AggregationMode: "Value",
      type: "table",
    },
    {
      Version: "0.1",
      Limit: 1,
      Event: "Quote",
      Metadata: "lastName",
      DisplayName: "Last Name",
      AggregationMode: "Value",
      tag: "name",
      type: "inline",
    },
  ],
};
