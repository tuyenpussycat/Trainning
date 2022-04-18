import produce from 'immer'
const initialState = {
  Quotes: '',
  Author: ''
}
const QUOTES = 'QUOTES'
// const AUTHOR = 'AUTHOR'
const quotesRandom = (state = initialState, action) => {
  switch (action.type) {
    case QUOTES:
      return produce(state, newState => {
        newState.Quotes = action.payload.textQuote
        newState.Author = action.payload.textAuthor
      })
    default:
      return state
  }
}
export default quotesRandom
