class AuthenticationService{
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser',username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user=sessionStorage.getItem('authenticatedUser');
        if(user === null) return false;
        else
            return true;
    }

    getCurrentUser(){
        if(this.isUserLoggedIn())
            return sessionStorage.getItem('authenticatedUser');
        else
            return null;
    }
}

export default new AuthenticationService();