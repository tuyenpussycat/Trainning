import { combineReducers } from "redux";
import calculatorReducer from "./calculator";
import todoList from "./todoList";

const rootReducer = combineReducers({
    calculator : calculatorReducer,
    todoList : todoList
})
export default rootReducer;