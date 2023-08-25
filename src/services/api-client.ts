import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "f91e1a66244b41d38e66ecaeb0297fa0"
    }
})