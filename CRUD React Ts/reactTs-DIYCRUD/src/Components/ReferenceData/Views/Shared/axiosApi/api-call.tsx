
import axios from 'axios';
import {CONFIG} from './config';


export  default class WeatherApi{
    // making the function api call async and await
    static  getCurrentWeatherData = async (cityName:string)=> {
        let url = CONFIG.WEATHER_API.replace('~', cityName);
        return await axios.get(url+CONFIG.WEATHER_API_KEY);
    }
}

