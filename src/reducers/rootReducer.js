import { combineReducers } from 'redux'
import { homeReducer } from "./HomeReducer"



export const rootReducer = combineReducers({home: homeReducer})




