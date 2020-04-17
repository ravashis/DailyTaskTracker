import axios from 'axios';
import { API_URL } from '../../Constants.js';

class TaskService{

    getAllTasks(user){
        //console.log("Service method called");
        return axios.get(`${API_URL}/users/${user}/tasks`);
        //return axios.get(`https://bootbackend.herokuapp.com/users/${user}/tasks`);
    }

    getTask(user,id){
        //console.log("Service method called");
        return axios.get(`${API_URL}/users/${user}/tasks/${id}`);
        //return axios.get(`https://bootbackend.herokuapp.com/users/${user}/tasks/${id}`);
    }

    deleteTask(user,id){
        //console.log("Service method called");
        return axios.delete(`${API_URL}/users/${user}/tasks/${id}`);
        //return axios.delete(`https://bootbackend.herokuapp.com/users/${user}/tasks/${id}`);
    }

    updateTask(user,id,task){

        return axios.put(`${API_URL}/users/${user}/tasks/${id}`,task);
        //return axios.put(`https://bootbackend.herokuapp.com/users/${user}/tasks/${id}`,task);

    }

    addTask(user,task){
        return axios.post(`${API_URL}/users/${user}/tasks`,task);
        //return axios.post(`https://bootbackend.herokuapp.com/users/${user}/tasks`,task);

    }


}

export default new TaskService();