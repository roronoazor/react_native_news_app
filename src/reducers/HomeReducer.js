
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
    entertainment_detail: null
}

export function homeReducer(state = initialState, action) {
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
    }
    // otherwise return the existing state unchanged
    return state
  }