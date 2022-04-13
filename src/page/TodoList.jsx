import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  checkL, clear, clearComplete,  getText, selectall, SelectedActive, SelectedAll, SelectedCompleted } from '../actions/todolist';
import Todo from './component/Todo';

TodoList.propTypes = {
    
};

function  TodoList (){
    const currText = useSelector(state => state.todoList.currText)
    const valueInput = useSelector(state => state.todoList.valueInput)
    const checkLength = useSelector(state=> state.todoList.checkLength)
    const checkAll = useSelector(state => state.todoList.checkAll)
    const dispatch = useDispatch();
    const all =JSON.stringify(JSON.parse(localStorage.getItem('jobs')))
    const active =JSON.stringify(JSON.parse(localStorage.getItem('jobs')).filter(a => a.completed===false))
    const completed =JSON.stringify(JSON.parse(localStorage.getItem('jobs')).filter(a => a.completed===true))
    if(localStorage.getItem('jobs')===null || JSON.parse(localStorage.getItem('jobs')).length ===0 ){
        const action = checkL(false)
        dispatch(action)
     }
     else if(JSON.parse(localStorage.getItem('jobs')).length>0){
        const action = checkL(true)
        dispatch(action)
     }
    const handleSubmit = (e) => {
        e.preventDefault();
            const a = { 
                completed: false,
                title: currText,
               editing: false,
               key: valueInput.length,
            }
            const action = getText(a)
            dispatch(action)
          }

         const handleChange = (e) =>{
            const action = clear(e.target.value)
            dispatch(action)
         }
         const selectAll = () => {
             
             const action = selectall()
             dispatch(action)
         }
         const clear_Complete  = () =>{
             const action = clearComplete()
             dispatch(action)
         }
         const btnAll = () =>{
            const action = SelectedAll()
            dispatch(action)
         }
         const  btnActive = () =>{
            const action = SelectedActive()
            dispatch(action)
        }
        const btnCompleted = () =>{
            const action = SelectedCompleted()
            dispatch(action)
        }
    return (
        <div className='text-center'>
            
            <div className='text-[100px] text-[#af2f2f] opacity-10'>todos</div>
            <form onSubmit={handleSubmit}>
            <input value={currText} onChange={handleChange} type='text' className='py-[16px] pl-[60px] pr-[16px] shadow text-[24px] leading-[22px] outline-none w-[550px] h-[66px] '  placeholder='What needs to be done'></input>
            <div className={classNames('absolute opacity-50 left-[36.6%] top-[273px] cursor-default rotate-90',{'opacity-100':checkAll||(completed === JSON.stringify(valueInput))})} onClick={selectAll} >❯</div>
            </form>
             <div>{valueInput.map((a,index)=>
             <Todo key={index} index={index} a={a}></Todo>
             )}</div> 
                {(checkLength===true) ? <div className='w-[553px] h-[45px] mx-[35.5%] relative  shadow-md'>
                    <span className='text-left absolute left-[3.5%] top-[25%]'> {valueInput.filter(a=> a.completed === false).length} item left</span>
                    <button className={classNames('absolute top-[25%] left-[30%] hover:border-[1px] px-[8px]',{'border-[1px] px-[8px]' :JSON.stringify(valueInput)===all})} onClick={btnAll}>All</button>
                    <button className={classNames('absolute top-[25%] left-[38%] hover:border-[1px] px-[8px]',{'border-[1px] px-[8px]' :JSON.stringify(valueInput)===active})} onClick={btnActive}>Active</button>
                    <button className={classNames('absolute top-[25%] left-[51%] hover:border-[1px] px-[8px]',{'border-[1px] px-[8px]' :JSON.stringify(valueInput)===completed})} onClick={btnCompleted}>Completed</button>
                    <span className='text-left absolute right-[3.5%] top-[25%] hover:underline cursor-pointer' onClick={clear_Complete} >{valueInput.filter(a=> a.completed).length > 0 && 'Clear completed'}</span>
                </div> : ''}
        </div>
    );
}
export default TodoList;
