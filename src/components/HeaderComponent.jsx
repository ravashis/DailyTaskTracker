import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='http://www.google.com' className='navbar-brand'>Google Search</a></div>
                    <ul className='navbar-nav'>
                     { isUserLoggedIn &&  <li ><Link to='/home/admin' className='nav-link'>Home</Link></li> }
                     { isUserLoggedIn &&   <li ><Link to='/tasks' className='nav-link'>Tasks</Link></li> }
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                      { !isUserLoggedIn && <li><Link to='/login' className='nav-link'>Login</Link></li> }
                      { isUserLoggedIn && <li><Link to='/logout' className='nav-link' onClick={AuthenticationService.logout}>Logout</Link></li> }
                    </ul>
                </nav>
            </header>
        )
    }
}


export default withRouter(HeaderComponent);