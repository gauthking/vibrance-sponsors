import axios from "axios"

const instance = axios.create({
    baseURL: "https://vitvibrance.onrender.com/api/v1.0"
})

export default instance