
let initialState = {
    news : null,
    homeNews: {
      loading: true,
      data: null
    },
    detail: null
}

export function homeReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === "home/setNews"){
      let s = {...state, homeNews: {loading: false, data: action.payload}}
      return s
    } else if (action.type === "news/newsDetail"){
      console.log("detail ", action.payload);
      return {...state, detail: action.payload}
    }
    // otherwise return the existing state unchanged
    return state
  }