import axios from "axios";


const BASE_URL = 'https://pokeapi.co/api/v2';

class QBapi {

    static refreshToken;
    static accessToken;

    static async request(endpoint, data = {}, method = "get"){
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${this.token}`};
        const params = (method  === "get") ? data : {};

        try {
            return (await axios({ url, method, data, params})).data;
        } catch (e){
            console.error("API ERROR:", e.response);
            let message = e.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getAuth() {
        
    }

}

export default QBapi;