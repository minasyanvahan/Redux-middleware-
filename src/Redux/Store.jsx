import { combineReducers } from "redux";
import Reducer from "./Reducer";

const rootReducer = combineReducers({
    dataReducer: Reducer,
});


export default rootReducer;