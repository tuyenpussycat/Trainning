import { combineReducers } from 'redux'
import calculatorReducer from './calculator'
import quotesRandom from './quotes'
import todoList from './todoList'

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  todoList: todoList,
  quotes: quotesRandom
})
export default rootReducer
