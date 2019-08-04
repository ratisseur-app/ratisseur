import axios from 'axios';

export default {

    register({lastname, firstname, email, password}) {
        return axios.post(
            '/api/users',
            { lastname: lastname, firstname: firstname, email: email, password: password }
        );
    }
}