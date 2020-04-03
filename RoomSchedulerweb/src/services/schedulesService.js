import axios from 'axios';
import { URLS } from './../constants'
import { postRequest, getRequest } from './requestService'

export const addNewSchedule = (body) => {
    return axios.post(`${URLS.SCHEDULES}`, body);
}

export const getSchedules = (body) => {
    return axios.get(`${URLS.SCHEDULES}`);
}