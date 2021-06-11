import { createStore } from "redux";    //// To create the store import the createStore function from the redux module
import rootReducer from "./reducers/index";    //// import the rootreducer 

const store = createStore(rootReducer);    /// here create our store
export default store;              //// Now export our store 
