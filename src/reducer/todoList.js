import produce from 'immer'
const initialState = {
  currText: '',
  valueInput: JSON.parse(localStorage.getItem('jobs')) || [],
  checkLength: false,
  todo: [],
  checkAll: false,
  edit: false,
  valueInputEdit: '',
  valueEdit: ''
}
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
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEXT:
      return produce(state, newState => {
        newState.currText = ''
        newState.valueInput = [...newState.valueInput, action.payload]
        newState.todo = [...newState.todo, action.payload]
        localStorage.setItem('jobs', JSON.stringify(newState.valueInput))
      })
    case CLEAR_INPUT:
      return produce(state, newState => {
        newState.currText = action.payload
      })
    case COMPLETED:
      return produce(state, newState => {
        const coppyItem = JSON.parse(localStorage.getItem('jobs'))
        const SelectItem = coppyItem[action.payload]
        SelectItem.completed = !SelectItem.completed
        localStorage.setItem('jobs', JSON.stringify(coppyItem))
        newState.valueInput = JSON.parse(localStorage.getItem('jobs'))
      })
    case REMOVE:
      return produce(state, newState => {
        newState.valueInput.splice(action.payload, 1)
        localStorage.setItem('jobs', JSON.stringify(newState.valueInput))
      })
    case CHECK_LENGTH:
      return produce(state, newState => {
        newState.checkLength = action.payload
      })
    case SELECT_ALL:
      return produce(state, newState => {
        newState.checkAll = !newState.checkAll
        const coppyItem = JSON.parse(localStorage.getItem('jobs'))
        coppyItem.map(change => (change.completed = newState.checkAll))
        localStorage.setItem('jobs', JSON.stringify(coppyItem))
        newState.valueInput = JSON.parse(localStorage.getItem('jobs'))
      })
    case CLEAR_COMPLETED:
      return produce(state, newState => {
        const coppyItem = JSON.parse(localStorage.getItem('jobs'))
        localStorage.setItem('jobs', JSON.stringify(coppyItem.filter(change => change.completed === false)))
        newState.valueInput = JSON.parse(localStorage.getItem('jobs'))
      })
    case EDIT:
      return produce(state, newState => {
        const coppyItem = JSON.parse(localStorage.getItem('jobs'))
        const SelectItem = coppyItem[action.payload]
        SelectItem.editing = !SelectItem.editing
        localStorage.setItem('jobs', JSON.stringify(coppyItem))
        newState.valueInput = JSON.parse(localStorage.getItem('jobs'))
      })
    case END_EDIT:
      return produce(state, newState => {
        newState.valueInputEdit = action.payload.value
        const coppyItem = JSON.parse(localStorage.getItem('jobs'))
        const SelectItem = coppyItem[action.payload.index]
        SelectItem.editing = !SelectItem.editing
        SelectItem.title = newState.valueInputEdit
        localStorage.setItem('jobs', JSON.stringify(coppyItem))
        newState.valueInput = JSON.parse(localStorage.getItem('jobs'))
      })
    case CHANGE_VALUE:
      return produce(state, newState => {
        newState.valueInput = JSON.parse(localStorage.getItem('jobs'))
        newState.valueInput[action.payload.index].title = action.payload.value
      })
    case SELECTED_ALL:
      return produce(state, newState => {
        newState.valueInput = JSON.parse(localStorage.getItem('jobs'))
      })
    case SELECTED_ACTIVE:
      return produce(state, newState => {
        newState.valueInput = JSON.parse(localStorage.getItem('jobs')).filter(change => change.completed === false)
      })
    case SELECTED_COMPLETED:
      return produce(state, newState => {
        newState.valueInput = JSON.parse(localStorage.getItem('jobs')).filter(change => change.completed === true)
      })
    default:
      return state
  }
}
export default todoList
