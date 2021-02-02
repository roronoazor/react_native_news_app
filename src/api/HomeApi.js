import { BASE_URL, api_key } from "./constants"
import axios from "axios"
import { getHomeNewsAction, setGenericNewsAction, setHomeNewsAction, setEntertainmentNewsAction  } from "../actions/HomeActionCreators"
import store from "../../store";


export function getHomePageNews(category="general"){
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
            store.dispatch(setEntertainmentNewsAction(res.data));
            console.log("get: ", store.getState())
            return res.data;
        }).catch(error=>{
            console.log(error)
            alert("an error occured, please check ur network connection");
        })
}

export function getGenericNews(category="general"){
    // https://newsapi.org/v2/top-headlines?country=us&category=sports
    console.log("params: ", category)
    const url = `${BASE_URL}v2/top-headlines?country=us&category=${category}`;
    const headers = {"X-Api-Key": "deaf012f67454ec2b8026b4a4a54017f"}
    axios.get(url, {headers: headers})
        .then(res=>{
            console.log(url);
            console.log("datas: ", res.data);
            res.data.news_type = category;  // at this point set the news type
            store.dispatch(setGenericNewsAction(res.data));
            console.log("genericl news: ", res.data);
            console.log("get: ", store.getState())
            return res.data;
        }).catch(error=>{
            console.log(error)
            alert("an error occured, please check ur network connection");
        })   
}