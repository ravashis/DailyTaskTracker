import React,{Component} from 'react';
import HelloService from '../api/dailytasktracker/HelloService';

class Welcome extends Component{
    constructor(props) {
        super(props)
        this.state={
            welcomeFromService:''
        }
        this.serviceHello=this.serviceHello.bind(this);
    }
    render(){
        return(
            <div className='jumbotron'>
            <h1>Welcome....!!!</h1>
            <br />
            <button onClick={this.serviceHello} className='btn btn-success'>Get Welcome from REST service</button>
            <br />
            {this.state.welcomeFromService}
            </div>
        )
    }

    serviceHello() {
        HelloService.executeHelloService()
        .then(
            response => this.handleSuccessfulResponse(response)
        ).catch(
            error => this.handleError(error)
        );
    }

    handleSuccessfulResponse(response){
        this.setState({
            welcomeFromService:response.data
        })
    }

    handleError(error)
    {
        let errorMessage='';
        
        if(error.message)
            errorMessage+=error.message;

        if(error.response && error.response.data)
            errorMessage+=error.response.data.message;

        this.setState({
            welcomeFromService:errorMessage
        })
    }

}

export default Welcome;