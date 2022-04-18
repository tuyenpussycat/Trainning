import classNames from 'classnames'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkL, clear, clearComplete, getText, selectall, btnActive, btnAll, btnCompleted } from '../actions/todolist'
import Todo from './component/Todo'

TodoList.propTypes = {}

function TodoList() {
  const currText = useSelector(state => state.todoList.currText)
  const valueInput = useSelector(state => state.todoList.valueInput)
  const checkLength = useSelector(state => state.todoList.checkLength)
  const checkAll = useSelector(state => state.todoList.checkAll)
  const dispatch = useDispatch()
  if (localStorage.getItem('jobs') === null || JSON.parse(localStorage.getItem('jobs')).length === 0) {
    const action = checkL(false)
    dispatch(action)
  } else if (JSON.parse(localStorage.getItem('jobs')).length > 0) {
    const action = checkL(true)
    dispatch(action)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const todoItem = {
      completed: false,
      title: currText,
      editing: false,
      key: valueInput.length
    }
    const action = getText(todoItem)
    dispatch(action)
  }

  const handleChange = e => {
    const action = clear(e.target.value)
    dispatch(action)
  }
  const selectAll = () => {
    const action = selectall()
    dispatch(action)
  }
  const clear_Complete = () => {
    const action = clearComplete()
    dispatch(action)
  }
  const handleBtnAll = () => {
    const action = btnAll()
    dispatch(action)
  }
  const handleBtnActive = () => {
    const action = btnActive()
    dispatch(action)
  }
  const handleBtnCompleted = () => {
    const action = btnCompleted()
    dispatch(action)
  }
  const all = JSON.stringify(JSON.parse(localStorage.getItem('jobs')))
  const active = JSON.stringify(JSON.parse(localStorage.getItem('jobs')).filter(active => active.completed === false))
  const completed = JSON.stringify(
    JSON.parse(localStorage.getItem('jobs')).filter(complete => complete.completed === true)
  )
  return (
    <div className="text-center">
      <div className="text-[6.25rem] text-[#af2f2f] opacity-10">todos</div>
      <form onSubmit={handleSubmit}>
        <input
          value={currText}
          onChange={handleChange}
          type="text"
          className="py-[1rem] pl-[3.75rem] pr-[1rem] shadow text-[24px] leading-[1.375rem] outline-none w-[34.375rem] h-[4.125rem]"
          placeholder="What needs to be done"
        ></input>
        <div
          className={classNames('absolute opacity-50 left-[44.188rem] top-[17.063rem] w-5 cursor-default rotate-90', {
            'opacity-100': checkAll || completed === JSON.stringify(valueInput)
          })}
          onClick={selectAll}
        >
          ❯
        </div>
      </form>
      <div>
        {valueInput.map((todoItem, index) => (
          <Todo key={index} index={index} todoItem={todoItem}></Todo>
        ))}
      </div>
      {checkLength === true ? (
        <div className="w-[34.375rem] h-[2.813rem] m-[auto] relative border-[1px]">
          <span className="text-left absolute left-[1.375rem] top-[0.625rem]">
            {' '}
            {valueInput.filter(complete => complete.completed === false).length} item left
          </span>
          <button
            className={classNames('absolute top-[25%] left-[30%] hover:border-[1px] px-[8px]', {
              'border-[1px] px-[8px]': JSON.stringify(valueInput) === all
            })}
            onClick={handleBtnAll}
          >
            All
          </button>
          <button
            className={classNames('absolute top-[25%] left-[38%] hover:border-[1px] px-[8px]', {
              'border-[1px] px-[8px]': JSON.stringify(valueInput) === active
            })}
            onClick={handleBtnActive}
          >
            Active
          </button>
          <button
            className={classNames('absolute top-[25%] left-[51%] hover:border-[1px] px-[8px]', {
              'border-[1px] px-[8px]': JSON.stringify(valueInput) === completed
            })}
            onClick={handleBtnCompleted}
          >
            Completed
          </button>
          <span
            className="text-left absolute right-[3.5%] top-[25%] hover:underline cursor-pointer"
            onClick={clear_Complete}
          >
            {valueInput.filter(complete => complete.completed).length > 0 && 'Clear completed'}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
export default TodoList
