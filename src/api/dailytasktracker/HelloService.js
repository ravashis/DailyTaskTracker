import axios from 'axios';

class HelloService{

    executeHelloService(){
        //console.log("Service method called");
        return axios.get('http://localhost:8080/');
        //return axios.get('https://bootbackend.herokuapp.com');
    }

    executeHelloUserService(name){
        return axios.get(`http://localhost:8080/user/${name}`);
        //return axios.get(`https://bootbackend.herokuapp.com/user/${name}`);
    }

}

export default new HelloService();