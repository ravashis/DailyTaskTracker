import React, {Component} from 'react';
import './TaskTracker.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class TaskTracker extends Component{
    render(){
        return(
            <div className='mainDiv'>
            <br /><br /><br /><br />
                My Daily Task Tracker <br /><br /><br />

                <Router>
                    <Route path="/" component={Welcome}/>
                    <Route path="/login" component={Login}></Route>  
                </Router>
                
              {/*  <Login /> */}
            
            </div>
        )
    }

}

class Welcome extends Component{
    render(){
        return(
            <div>
            Welcome....!!!
            </div>
        )
    }
}

class Login extends Component{ //controlled component
    constructor(props)
    {
        super(props);
        this.state={
            username:"admin",     //names should be same as that in the form elements
            password: "",
            hasLoginFailed:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.loginClick=this.loginClick.bind(this);
    }

    handleChange(event){ //synthetic event
        this.setState({[event.target.name]:event.target.value});

    }

    loginClick(event){
        if ((this.state.username === "admin") && (this.state.password === "admin")) 
        {
            this.setState({hasLoginFailed:false});
        }
        else
        {
            this.setState({hasLoginFailed:true});
        }
    }


    render(){
        return(
            <div className='mainDiv'>
                UserName:<input type='text' name='username' value={this.state.username} onChange={this.handleChange}/><br /><br />
                Password:   <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br /><br /><br />
                <button class='login' onClick={this.loginClick}>Login</button><br /><br />
                <ShowMessage hasLoginFailed={this.state.hasLoginFailed}/>   
            </div>
        )
    }
}

function ShowMessage(props){
    if (props.hasLoginFailed)
    {
        return <div>Invalid Credentials</div>
    }
    else
    {
        return <div>Login Successful</div>
    }
}


export default TaskTracker;