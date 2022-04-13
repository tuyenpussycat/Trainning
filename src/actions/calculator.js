const CURRENT_NUMBER= "CURRENT_NUMBER"
const CLEAR = "CLEAR"
const VALUE ="VALUE"
const CURRENT_SIGN ="CURRENT_SIGN"
const DOT ='DOT'
const ZERO='ZERO'
export const getValue = (get) =>{
    return{
        type:CURRENT_NUMBER,
        payload:get,
    }
}
export const clearAll = () =>{
    return{
        type:CLEAR,
    }
}
export const getEqual = (get) =>{
        return{
            type:VALUE,
            payload:get,
        }
}
export const getSign = (get) =>{
    return{
        type:CURRENT_SIGN,
        payload:get,
    }
}
export const getDot =(get) =>{
    return{
        type:DOT,
        payload:get
    }
}
export const getZero =(get) =>{
    return {
        type:ZERO,
        payload:get
}

}