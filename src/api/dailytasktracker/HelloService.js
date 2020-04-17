import axios from 'axios';
import { API_URL } from '../../Constants.js';

class HelloService{

    executeHelloService(){

        let username='admin';
        let password='admin';

        let basicAuthHeader='Basic ' + window.btoa(username + ":" + password);

        //console.log("Service method called");
        return axios.get(`${API_URL}/`,{
            headers:{
                authorization:basicAuthHeader
            }
        });
        //return axios.get('https://bootbackend.herokuapp.com');
    }

    executeHelloUserService(name){
        return axios.get(`${API_URL}/user/${name}`);
        //return axios.get(`https://bootbackend.herokuapp.com/user/${name}`);
    }

}

export default new HelloService();