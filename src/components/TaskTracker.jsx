import React, {Component} from 'react';
import './TaskTracker.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import Login from './LoginComponent.jsx';
import ListTasks from './ListTasks.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import Home from './HomeComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import Welcome from './Welcome.jsx';
import TaskComponent from './TaskComponent.jsx';

class TaskTracker extends Component{
    render(){
        return(
            <div className='mainDiv'>
                <Router>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/login" component={Login}></Route>
                    <AuthenticatedRoute path="/home/:name" component={Home}></AuthenticatedRoute>
                    <AuthenticatedRoute path="/tasks" exact component={ListTasks}></AuthenticatedRoute>
                    <AuthenticatedRoute path="/tasks/:id" component={TaskComponent}></AuthenticatedRoute>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>  
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent />
                </Router>
                
              {/*  <Login /> */}
            
            </div>
        )
    }

}

export default TaskTracker;