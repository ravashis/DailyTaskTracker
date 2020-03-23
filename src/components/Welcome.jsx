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
        );
    }

    handleSuccessfulResponse(response){
        this.setState({
            welcomeFromService:response.data
        })
    }

}

export default Welcome;