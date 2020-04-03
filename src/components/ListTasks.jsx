import React,{Component} from 'react';
import TaskService from '../api/dailytasktracker/TaskService.js';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

class ListTasks extends Component{

    constructor(props){
        super(props);
        this.state ={
            todos: 
            [
            ],
            message:null
        }
        
    }

    componentDidMount(){
        this.refreshTasks();
    }

    refreshTasks()
    {
        TaskService.getAllTasks(AuthenticationService.getCurrentUser()).then(
            response =>{
                console.log(response);
                this.setState({
                     todos:response.data
                 })       
            }
        );
    }

    deleteClicked(id){
        TaskService.deleteTask(AuthenticationService.getCurrentUser(),id).then(
            response=>{
                    this.setState({
                        message : `Task ${id} has been deleted`
                    })
                    this.refreshTasks();
            }
        );
    }

    updateClicked(id){
        this.props.history.push(`/tasks/${id}`);
    }

    addClicked(){
        this.props.history.push('/tasks/-1');
    }

    render(){
        const addStyle = {
            'text-align': 'right'
        };
        return(
            <div className="taskDiv">
               <h1> Today's Itenary</h1>
                <br />
                <div style={addStyle}>
                    <button className='btn btn-success' onClick={()=>this.addClicked()}>Add Task</button>
                </div>
                <br />
                <div>{this.state.message}</div>
                <br />
                <div className='container'>
                <table className='table'>
                      <thead>
                        <tr>
                            <th>Description</th>
                            <th>IsCompleted</th>
                            <th>Target Date</th>
                            <th>Update Task</th>
                            <th>Delete Task</th>
                        </tr>
                      </thead>   
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate.toString()).format('YYYY-MM-DD')}</td>
                                        <td><button className='btn btn-success' onClick={() => this.updateClicked(todo.id)}>Update</button></td>
                                        <td><button className='btn btn-warning' onClick={() => this.deleteClicked(todo.id)}>Delete</button></td>
                                    </tr>
                        )
                    }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListTasks;