
class WebexAuthService {
  private readonly clientId: string;
  private readonly redirectUri: string;
  private readonly scope: string;

  constructor() {
    // @ts-ignore
    this.clientId = process.env.DOTENV.CLIENT_ID || "";
    // @ts-ignore
    this.redirectUri = process.env.DOTENV.REDIRECT_URI  || "";
    // @ts-ignore
    this.scope = process.env.DOTENV.WEBEX_API_SCOPE || "";
  }

  initiateLogin() {
    const authorizationUrl = `https://webexapis.com/v1/authorize?client_id=${this.clientId}&response_type=token&redirect_uri=${this.redirectUri}&scope=${this.scope}&state=set_state_here`;
    console.log('Authorization URL', authorizationUrl);
    window.location.href = authorizationUrl;
  }

  
}

export const webexAuthService = new WebexAuthService();