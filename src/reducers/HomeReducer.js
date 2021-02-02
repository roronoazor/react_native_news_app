
let initialState = {
    news : null,
    homeNews: {
      loading: true,
      data: null
    },
    home_detail: null,
    entertainmentNews: {
      loading: true,
      data: null
    },
    entertainment_detail: null,
    sportsNews: {
      loading: true,
      data: null
    },
    businessNews: {
      loading: true,
      data: null
    }
}

export function homeReducer(state = initialState, action) {
    console.log(action);
    // Check to see if the reducer cares about this action
    if (action.type === "home/setNews"){
      let s = {...state, homeNews: {loading: false, data: action.payload}}
      return s
    } else if (action.type === "news/newsDetail"){
      return {...state, home_detail: action.payload}
    } else if(action.type === "entertainment/setNews"){
      let s = {...state, entertainmentNews: {loading: false, data: action.payload}}
      return s
    } else if (action.type === "entertainment/newsDetail") {
      return {...state, entertainment_detail: action.payload}
    } else if (action.type === "generic/setNews"){
      if (action.news_type === "sports"){
        return {...state, sportsNews: {loading: false, data: action.payload}}
      }else if (action.news_type === "business"){
        return {...state, businessNews: {loading: false, data: action.payload}}
    }
  }else if (action.type === "generic/genericDetail"){
      return {...state, generic_detail: action.payload}
    }
    // otherwise return the existing state unchanged
    return state
  }