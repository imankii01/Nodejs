import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

let API_BASE_URL = `${'http://localhost:5000/'}`;
// let API_BASE_URL = `${process.env.REACT_APP_BASE_URL}`;

const headers = {
    "x-app-name": "ankit",
    "x-device-id": "deviceid1",
    "x-platform-id": "web",
    "x-correlation-id": uuidv4(), // Fix: use uuidv4() to generate a UUID
    "x-app-version": "1.0",
    "x-test-otp": 12345,
};
export async function loginCall(data) {
    return await axios
        .post(`${API_BASE_URL}api/login`, data, {
            headers: headers,
        })
        .then((res) => {
            return {
                data: res.data,
                headers: res.headers,
                message: res.message,
            };
        });
}
export async function singupCall(data) {
    return await axios
        .post(`${API_BASE_URL}api/signup`, data, {
            headers: headers,
        })
        .then((res) => {
            return {
                data: res.data,
                headers: res.headers,
                message: res.message,
            };
        });
}


