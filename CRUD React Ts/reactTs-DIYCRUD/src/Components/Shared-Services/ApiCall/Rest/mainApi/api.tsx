
import React, {Component} from 'react';
import axios from 'axios';

const getApiData =()=>{
    let self=this;
    axios.get('https://api.github.com/users/dilli822').then(function (res) {
        console.log(res.data);
        // self.setState({
        //     apiData: res.data
        // })
    }).catch(function (error:string) {
        console.log(error);
    })
};
export default getApiData;