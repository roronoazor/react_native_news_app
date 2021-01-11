import { createStore } from "redux";
import { rootReducer } from "./src/reducers/rootReducer";


const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()))


export default store