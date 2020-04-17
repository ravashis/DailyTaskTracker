import axios from 'axios'; 
import { API_URL } from '../Constants.js';
export const USER_NAME_SESSION_ATTRIBUTE = 'authenticatedUser';

class AuthenticationService{


    executeBasicAuthentication(username,password){
        return axios.get(`${API_URL}/basicauth`,{headers:
        {authorization:this.createBasicAuthenticationToken(username,password)}});
    }

    executeJwtAuthentication(username,password){
        return axios.post(`${API_URL}/authenticate`,{username,password});
    }

    createBasicAuthenticationToken(username,password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    createJwtAuthenticationToken(token){
        
        return 'Bearer ' + token;
    }

    registerSuccessfulLogin(username,password){
       
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE,username);
        this.setUpAxiosInterceptor(this.createBasicAuthenticationToken(username,password));
    }

    registerSuccessfulJwtLogin(username,token){
       
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE,username);
        this.setUpAxiosInterceptor(this.createJwtAuthenticationToken(token));
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE);
    }

    isUserLoggedIn(){
        let user=sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);
        if(user === null) return false;
        else
            return true;
    }

    getCurrentUser(){
        if(this.isUserLoggedIn())
            return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);
        else
            return null;
    }

setUpAxiosInterceptor(AuthHeader){
    
    axios.interceptors.request.use(
        (config) => {
            if(this.isUserLoggedIn())
            {
                config.headers.authorization= AuthHeader ;
            }
            return config;
        }
    );

}

}

export default new AuthenticationService();