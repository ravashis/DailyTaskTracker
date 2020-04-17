import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService';


class Login extends Component{ //controlled component
    constructor(props)
    {
        super(props);
        this.state={
            username:"admin",     //names should be same as that in the form elements
            password: "",
            hasLoginFailed:""
        }
        this.handleChange=this.handleChange.bind(this);
        this.loginClick=this.loginClick.bind(this);
    }

    handleChange(event){ //synthetic event
        this.setState({[event.target.name]:event.target.value});

    }

    loginClick(event){
        //AuthenticationService.executeBasicAuthentication(this.state.username,this.state.password)
        AuthenticationService.executeJwtAuthentication(this.state.username,this.state.password)
        .then(
            (response) => {
                AuthenticationService.registerSuccessfulJwtLogin(this.state.username,response.data.token);
                this.props.history.push(`/home/${this.state.username}`);
                this.setState({hasLoginFailed:"false"});
            }
        )
        .catch(
            () => {
                this.setState({hasLoginFailed:"true"})
            }
        )

    }


    render(){
        return(
            <div className='mainDiv'>
            <h1>Login</h1><br />
            <div className='container'>
                UserName:<input type='text' name='username' value={this.state.username} onChange={this.handleChange}/><br /><br />
                Password:   <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br /><br /><br />
                <button className='btn btn-success' onClick={this.loginClick}>Login</button><br /><br />
                <ShowMessage hasLoginFailed={this.state.hasLoginFailed}/>   
                </div>
            </div>
        )
    }
}

function ShowMessage(props){
    if (props.hasLoginFailed === "true")
    {
        return <div className='alert alert-warning'>Invalid Credentials</div>
    }
    else
    {
        return <></>
    }
}

export default Login;