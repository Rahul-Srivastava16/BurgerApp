import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-59922.firebaseio.com/'
});

export default instance;