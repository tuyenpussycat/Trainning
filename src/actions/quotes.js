const QUOTES = 'QUOTES'

// const AUTHOR = 'AUTHOR'
export const quotesText = randomQuotes => {
  return {
    type: QUOTES,
    payload: randomQuotes
  }
}
// export const authorText = get => {
//   return {
//     type: AUTHOR,
//     payload: get
//   }
// }
