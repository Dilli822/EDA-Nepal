import React, {Component} from 'react';
import axios from 'axios';
import {CONFIG} from './config';
import { ObjectFlags } from 'typescript';


interface IState {
  name?: string,
}

class ApiCall extends Component <IState> {

    constructor(props: any ){
        super(props);
        this.state = {
            name: "dilli",
        }
    }



    componentDidMount() {
        this.getApiData();
    }


    getApiData=()=>{
        let self=this;
        axios.get('https://api.github.com/users/dilli822').then(function (res) {
            console.log(res.data);
            self.setState({
                apiData: res.data
            })
        }).catch(function (error:string) {
            console.log(error);
        })
    };

    render() {
        return (
          
            <div>

                {/* {this.name} */}

            
            </div>
        );
    }
}

export default ApiCall;