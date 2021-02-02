export const getHomeNewsAction = (data) => ({ type: 'home/getNews', payload: data})

export const setHomeNewsAction = (data) => {
    let s = {type: "home/setNews", payload: data}
    return s;
};
    
export const setNewsDetailAction = (data) => {
    return {type: "news/newsDetail", payload: data}
}

export const setEntertainmentNewsAction = (data) => {
    let s = {type: "entertainment/setNews", payload: data}
    return s;
}

export const setEntertainmentDetailAction = (data) => {
    return {type: "entertainment/newsDetail", payload: data}
}

export const setGenericNewsAction = (data) => {
    let s = {type: "generic/setNews", payload: data, news_type: data.news_type}
    return s;
}

export const setGenericDetailAction = (data) => {
    return {type: "generic/genericDetail", payload: data}
}