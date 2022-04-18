const REMOVE = 'REMOVE'
const GET_TEXT = 'GET_TEXT'
const CLEAR_INPUT = 'CLEAR_INPUT'
const CHECK_LENGTH = 'CHECK_LENGTH'
const COMPLETED = 'COMPLETED'
const SELECT_ALL = 'SELECT_ALL'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
const EDIT = 'EDIT'
const END_EDIT = 'END_EDIT'
const CHANGE_VALUE = 'CHANGE_VALUE'
const SELECTED_ALL = 'SELECTED_ALL'
const SELECTED_ACTIVE = 'SELECTED_ACTIVE'
const SELECTED_COMPLETED = 'SELECTED_COMPLETED'
export const getText = getText => {
  return {
    type: GET_TEXT,
    payload: getText
  }
}
export const clear = clear => {
  return {
    type: CLEAR_INPUT,
    payload: clear
  }
}
export const remove = remove => {
  return {
    type: REMOVE,
    payload: remove
  }
}
export const checkL = get => {
  return {
    type: CHECK_LENGTH,
    payload: get
  }
}
export const completed = completed => {
  return {
    type: COMPLETED,
    payload: completed
  }
}
export const selectall = selectAll => {
  return {
    type: SELECT_ALL,
    payload: selectAll
  }
}
export const clearComplete = clearComplete => {
  return {
    type: CLEAR_COMPLETED,
    payload: clearComplete
  }
}
export const editing = edit => {
  return {
    type: EDIT,
    payload: edit
  }
}
export const endedited = edited => {
  return {
    type: END_EDIT,
    payload: edited
  }
}
export const changevalue = changeValue => {
  return {
    type: CHANGE_VALUE,
    payload: changeValue
  }
}
export const btnAll = btnAll => {
  return {
    type: SELECTED_ALL,
    payload: btnAll
  }
}
export const btnActive = btnActive => {
  return {
    type: SELECTED_ACTIVE,
    payload: btnActive
  }
}
export const btnCompleted = btnCompleted => {
  return {
    type: SELECTED_COMPLETED,
    payload: btnCompleted
  }
}
