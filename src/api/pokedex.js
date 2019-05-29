import axios from 'axios';

const verifyUser = async (data) => {
    let response = false;
    await axios.post("http://localhost:3000/token/verify", data)
        .then(() => {
            response = true;
        })
        .catch((err) => {
            console.log(err);
        })

    return response;
}

export default {verifyUser};