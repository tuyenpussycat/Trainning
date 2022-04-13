const REMOVE = 'REMOVE'
const GET_TEXT ='GET_TEXT'
const CLEAR_INPUT='CLEAR_INPUT'
const CHECK_LENGTH = 'CHECK_LENGTH'
const COMPLETED = 'COMPLETED'
const SELECT_ALL ='SELECT_ALL'
const CLEAR_COMPLETED='CLEAR_COMPLETED'
const EDIT ='EDIT'
const END_EDIT='END_EDIT'
const CHANGE_VALUE = 'CHANGE_VALUE'
const SELECTED_ALL ='SELECTED_ALL'
const SELECTED_ACTIVE ='SELECTED_ACTIVE'
const SELECTED_COMPLETED ='SELECTED_COMPLETED'
export const getText =(get) =>{
    return{
        type:GET_TEXT,
        payload : get
    }
}
export const clear = (get) =>{
 
    return{
        type:CLEAR_INPUT,
        payload:get
    }
}
export const remove = (get) =>{
    
    return{
        type:REMOVE,
        payload:get
    }
}
export const checkL = (get) =>{
 
    return{
        type:CHECK_LENGTH,
        payload:get
    }
}
export const completed = (get) =>{
    return{
        type:COMPLETED,
        payload:get
    }
}
export const selectall = (get) =>{
    return{
        type:SELECT_ALL,
        payload:get
    }
}
export const clearComplete = (get) =>{
    return{
        type :CLEAR_COMPLETED,
        payload:get,
    }
}
export const editing = (get) =>{
    return {
        type:EDIT,
        payload:get
    }
}
export const endedited = (get) =>{
    return {
        type:END_EDIT,
        payload:get
    }
}
export const changevalue = (get) =>{
    return {
        type:CHANGE_VALUE,
        payload:get
    }
}
export const SelectedAll = (get) =>{
    return {
        type:SELECTED_ALL,
        payload : get
    }
}
export const SelectedActive = (get) =>{
    return {
        type:SELECTED_ACTIVE,
        payload : get
    }
}
export const SelectedCompleted = (get) =>{
    return {
        type:SELECTED_COMPLETED,
        payload : get
    }
}