import React from 'react'
import { changevalue, completed, editing, endedited, remove } from '../../actions/todolist'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import './style.css'
Todo.propTypes = {}

function Todo(props) {
  const { todoItem, index } = props
  const dispatch = useDispatch()
  const Remove = () => {
    const action = remove(index)
    dispatch(action)
  }
  const checkCompleted = () => {
    const action = completed(index)
    dispatch(action)
  }
  const edit = () => {
    const action = editing(index)
    dispatch(action)
  }
  const endEdit = e => {
    const valueEdited = {
      value: e.target.value,
      title: todoItem.title,
      index: index
    }
    const action = endedited(valueEdited)
    dispatch(action)
  }
  const changeValueEdit = e => {
    const valueEdit = {
      value: e.target.value,
      title: todoItem.title,
      index: index
    }
    const action = changevalue(valueEdit)
    dispatch(action)
  }
  return (
    <div className="todo-item">
      {todoItem.editing === true ? (
        <div className="shadow w-[34.375rem] mx-[auto]">
          <input
            autoFocus
            className="w-[31.625rem] ml-[2.688rem] h-[4.125rem] py-[0.75rem] px-[1rem] input-shadow outline-none text-[1.5rem]"
            type="text"
            value={todoItem.title}
            onBlur={endEdit}
            onChange={changeValueEdit}
          ></input>
        </div>
      ) : (
        <div className="text-left">
          <div
            className={classNames(
              'order-1 mx-[auto] relative py-[1rem] pl-[3.75rem] pr-[1rem] border-[1px] text-[1.5rem] outline-none w-[34.375rem] h-[auto]'
            )}
          >
            <div
              onClick={checkCompleted}
              className={classNames(
                'cursor-default left-[1%] top-[21.5%] w-[2.5rem] h-[2.5rem] absolute order-2',
                { 'icon-checked': todoItem.completed },
                { 'icon-no-checked': !todoItem.completed }
              )}
            ></div>
            <span
              onDoubleClick={edit}
              className={classNames({
                'line-through text-[#d9d9d9] w-[34.375rem]': todoItem.completed
              })}
            >
              {todoItem.title}
            </span>
            <div
              className="absolute right-[3.5%] top-[15%] opacity-60 hover:opacity-100 cursor-pointer text-[#af6565] text-[1.875rem] icon-remove"
              onClick={Remove}
            >
              ×
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo
