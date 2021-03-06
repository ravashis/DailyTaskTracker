import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import HelloService from '../api/dailytasktracker/HelloService.js';
import AuthenticationService from './AuthenticationService.js';

class Home extends Component{
constructor(props){
    super(props);

    this.state={
        welcomeUser:''
        }
    this.greetUser=this.greetUser.bind(this);
}

    render(){
        return(
            <div>
               Hello {this.props.match.params.name}. 
               <br /><br />
               <div className='container'>
               <button  onClick={this.greetUser}>Click me</button><br/><br />
               {this.state.welcomeUser}
               <br /> 
               Glad to have you back.....!!!
               </div>
               <br />
               Manage your tasks <Link to="/tasks">here</Link>.
            </div>
        )
    }

    greetUser(){
        console.log('called');
        HelloService.executeHelloUserService(AuthenticationService.getCurrentUser()).then(
            response => this.handleSuccess(response)
        ).catch(
            error => this.handleError(error)
        );
    }

    handleError(error){
        let errorMessage='';
        
        if(error.message)
            errorMessage+=error.message;

        if(error.response && error.response.data)
            errorMessage+=error.response.data.message;

        this.setState({
            welcomeUser:errorMessage
        })
    }

    handleSuccess(response){
        this.setState(
            {
                welcomeUser:response.data.hello
            }
        )
    }
}

export default Home;