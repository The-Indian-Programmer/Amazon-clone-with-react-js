import basket from "./checkoutreducer";  /// This is reducer one ... in any big project we could had multiple reducer. we will have to import all of them 
import {combineReducers} from "redux";   /// import the combineReducers to connect all the reducer 
import register from "./register"
const rootReducer = combineReducers({
    basket,
    register                           
})

export default rootReducer;