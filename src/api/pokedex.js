import axios from 'axios';

const verifyUser = async (data) => {
    let response = {
        exists: false,
        username: null,
    };
    await axios.post("http://localhost:3000/token/verify", data)
        .then((requestResponse) => {
            response.exists = true;
            response.username = requestResponse.data.username;
        })
        .catch((err) => {
            console.log(err);
        })

    return response;
}

export default {verifyUser};