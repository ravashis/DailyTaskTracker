import axios from 'axios';

class TaskService{

    getAllTasks(user){
        //console.log("Service method called");
        return axios.get(`http://localhost:8080/users/${user}/tasks`);
        //return axios.get(`https://bootbackend.herokuapp.com/users/${user}/tasks`);
    }

    getTask(user,id){
        //console.log("Service method called");
        return axios.get(`http://localhost:8080/users/${user}/tasks/${id}`);
        //return axios.get(`https://bootbackend.herokuapp.com/users/${user}/tasks/${id}`);
    }

    deleteTask(user,id){
        //console.log("Service method called");
        return axios.delete(`http://localhost:8080/users/${user}/tasks/${id}`);
        //return axios.delete(`https://bootbackend.herokuapp.com/users/${user}/tasks/${id}`);
    }

    updateTask(user,id,task){

        return axios.put(`http://localhost:8080/users/${user}/tasks/${id}`,task);
        //return axios.put(`https://bootbackend.herokuapp.com/users/${user}/tasks/${id}`,task);

    }

    addTask(user,task){
        return axios.post(`http://localhost:8080/users/${user}/tasks`,task);
        //return axios.post(`https://bootbackend.herokuapp.com/users/${user}/tasks`,task);

    }


}

export default new TaskService();