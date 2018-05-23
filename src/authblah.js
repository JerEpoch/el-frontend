
import auth0 from 'auth0-js'
import Vue from 'vue'


export default class AuthService {

    constructor () {
      this.login = this.login.bind(this)
    //   this.setSession = this.setSession.bind(this)
    //   this.logout = this.logout.bind(this)
    //   this.isAuthenticated = this.isAuthenticated.bind(this)
    }
  
    auth0 = new auth0.WebAuth({
      domain: 'extra-life-br.auth0.com',
      clientID: 'WWu4V3YNLpRBjMRC4yfX5ezV82Z3pIgY',
      redirectUri: 'http://localhost:8080/callback',
      audience: 'https://extra-life-br.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    })
  
    login () {
      this.auth0.authorize()
    }
  }