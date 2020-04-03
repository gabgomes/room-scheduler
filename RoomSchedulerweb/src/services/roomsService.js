import axios from 'axios';
import { URLS } from './../constants'

export const addNewRoom = (body) => {
    return axios.post(`${URLS.ROOMS}`, body);
}

export const getRooms = (body) => {
    return axios.get(`${URLS.ROOMS}`);
}