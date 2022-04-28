// import axios from 'axios';
import { Hash } from 'crypto';
// const fetchQuotes = async () => {
// 	try {
// 		const res = await axios.get(
// 			`https://animenewsnetwork.p.rapidapi.com/reports.xml`,
// 			{
// 				headers: {
// 					'x-rapidapi-host': 'animenewsnetwork.p.rapidapi.com',
// 					'x-rapidapi-key': 'd9a42d7ae1mshb3a3063221184b5p1e87e2jsnb00cc11fdfa4'
// 				}
// 			}
// 		);
//         console.log(res);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
// import {useState, useEffect} from "react";
// import React from "react";
// import characterModel from "./characterModel";


// export default function ApiCall () {

//     const [characterModel, setcharacterModel] = useState([]);
//     const apiExample = () => {
//         const url = "https://api.github.com/users/dilli822"  
//         axios.get(url).then((response)=>{
//             console.log("this is response", response);
//         }).catch((err)=>{
//             console.log("error ius", err);
//         })
//     }

//     return(
//         <div>
//             Api call examples 
//         </div>

//     )
// }



import axios from 'axios';
import {CONFIG} from './config';


export  default class WeatherApi{

    // making the function api call async and await
    static  getCurrentWeatherData = async (cityName:string)=> {
        let url = CONFIG.WEATHER_API.replace('~', cityName);
        return await axios.get(url+CONFIG.WEATHER_API_KEY);
    }
}

