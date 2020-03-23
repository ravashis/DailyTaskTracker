import axios from 'axios';

class HelloService{

    executeHelloService(){
        //console.log("Service method called");
        return axios.get('http://localhost:8080/');
    }

    executeHelloUserService(name){
        return axios.get(`http://localhost:8080/user/${name}`);
    }

}

export default new HelloService();