import { BASE_URL, api_key } from "./constants"
import axios from "axios"
import { getHomeNewsAction, setHomeNewsAction } from "../actions/HomeActionCreators"
import store from "../../store";


export function getHomePageNews(category="sports"){
    // https://newsapi.org/v2/top-headlines?country=us&category=sports
    const url = `${BASE_URL}v2/top-headlines?country=us&category=${category}`;
    const headers = {"X-Api-Key": "deaf012f67454ec2b8026b4a4a54017f"}
    axios.get(url, {headers: headers})
        .then(res=>{
            store.dispatch(setHomeNewsAction(res.data));
            console.log("get: ", store.getState())
            return res.data;
        }).catch(error=>{
            console.log(error)
            alert("an error occured, please check ur network connection");
        })
}


export function getEntertainmentPageNews(){
    // https://newsapi.org/v2/top-headlines?country=us&category=sports
    const url = `${BASE_URL}v2/top-headlines?country=us&category=entertainment`;
    const headers = {"X-Api-Key": "deaf012f67454ec2b8026b4a4a54017f"}
    axios.get(url, {headers: headers})
        .then(res=>{
            store.dispatch(setHomeNewsAction(res.data));
            console.log("get: ", store.getState())
            return res.data;
        }).catch(error=>{
            console.log(error)
            alert("an error occured, please check ur network connection");
        })
}