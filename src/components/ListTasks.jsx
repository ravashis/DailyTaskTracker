import React,{Component} from 'react';


class ListTasks extends Component{
    constructor(props){
        super(props);
        this.state ={
            todos: 
            [
                {id:1, description: "Eat", done:false ,targetDate:new Date() },
                {id:2, description: "Sleep", done:false ,targetDate:new Date() },
                {id:3, description: "Work", done:false ,targetDate:new Date() },
                {id:4, description: "Gym", done:false ,targetDate:new Date() },
                {id:5, description: "Repeat", done:false ,targetDate:new Date() }
            ]
        }
    }


    render(){
        return(
            <div className="taskDiv">
               <h1> Today's Itenary</h1>
                <br />
                <br />
                <br />
                <div className='container'>
                <table className='table'>
                      <thead>
                        <tr>
                            <th>Description</th>
                            <th>IsCompleted</th>
                            <th>Target Date</th>
                        </tr>
                      </thead>   
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
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