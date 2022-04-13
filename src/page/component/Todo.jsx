import React from 'react';
import { changevalue, completed, editing, endedited, remove } from '../../actions/todolist';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import './style.css'
Todo.propTypes = {

};

function Todo(props) {
  const { a, index } = props
  const dispatch = useDispatch();
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
  const endEdit = (e) => {
    const y = {
      value: e.target.value,
      title: a.title,
      index: index
    }
    const action = endedited(y)
    dispatch(action)
  }
  const changeValueEdit = (e) => {
    const h = {
      value: e.target.value,
      title: a.title,
      index: index
    }
    const action = changevalue(h)
    dispatch(action)
  }
  return (
    <div className='todo-item'>
      {(a.editing === true) ?  
      <div className='shadow w-[550px] mx-[auto]'> 
      <input autoFocus className='w-[506px] ml-[43px] h-[66px] py-[12px] px-[16px] input-shadow outline-none  text-[24px]' type='text' value={a.title} onBlur={endEdit} onChange={changeValueEdit} >
      </input> 
      </div>
      : <div className='text-left my-[0] mx-[35.6%] relative'>
        <div onClick={checkCompleted} 
        className={classNames('cursor-default left-[0.5%] top-[21.5%] w-[40px] h-[40px] absolute order-2',
          {'icon-checked': a.completed},
          {'icon-no-checked': !a.completed})}>
          </div>
        <div onDoubleClick={edit} className={classNames('order-1 py-[16px] pl-[60px] pr-[16px] border-[1px] text-[24px] outline-none w-[550px] h-[66px]')}>
          <span className={classNames({'line-through text-[#d9d9d9]': a.completed })}>{a.title}</span>    
        </div>
        <div className='absolute right-[3.5%] top-[15%] opacity-60 hover:opacity-100 cursor-pointer text-[#af6565] text-[30px] icon-remove' onClick={Remove}>×</div>
      </div>}
    </div>
  );
}

export default Todo;