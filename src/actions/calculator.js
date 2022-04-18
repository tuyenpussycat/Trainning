const CURRENT_NUMBER = 'CURRENT_NUMBER'
const CLEAR = 'CLEAR'
const VALUE = 'VALUE'
const CURRENT_SIGN = 'CURRENT_SIGN'
const DOT = 'DOT'
const ZERO = 'ZERO'
export const getValue = valueNumber => {
  return {
    type: CURRENT_NUMBER,
    payload: valueNumber
  }
}
export const clearAll = () => {
  return {
    type: CLEAR
  }
}
export const getEqual = value => {
  return {
    type: VALUE,
    payload: value
  }
}
export const getSign = currSign => {
  return {
    type: CURRENT_SIGN,
    payload: currSign
  }
}
export const getDot = dot => {
  return {
    type: DOT,
    payload: dot
  }
}
export const getZero = zero => {
  return {
    type: ZERO,
    payload: zero
  }
}
