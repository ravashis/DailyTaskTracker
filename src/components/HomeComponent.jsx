import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
               Hello {this.props.match.params.name}. 
               <br /><br />
               <div className='container'>
               Glad to have you back....!!!
               </div>
               <br />
               Manage your tasks <Link to="/tasks">here</Link>.
            </div>
        )
    }
}

export default Home;