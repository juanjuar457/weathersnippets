import axios from 'axios';

const API_KEY = 'faedba794d8d52ba08cf616e319b3875';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}

//KIP that axios returns a promise, the promise does not! Contain
//our data, it we are returning the promise (req) on the payload as the payload.

//redux promise>>> kip middle weare intercepts the action before getting to the app
//state.

//if the req is a promise, redux-promise stops the action and then dispatches
//a new action of the same type but with the payload of the resolved req

//redux-promise - unwraps the promise
