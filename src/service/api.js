import axios from 'axios'

export const api = axios.create({
    baseURL: "https://notes-api-adonaikjr.onrender.com"
})