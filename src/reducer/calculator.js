import produce from "immer";
const initialState ={
    currentVal: '0',
    formula: '',
    currentSign: '',
    value: '',
    check:true,
    checkSign:false,
    dot:'.'
}
const CURRENT_NUMBER= "CURRENT_NUMBER"
const CLEAR = "CLEAR"
const VALUE ="VALUE"
const CURRENT_SIGN ="CURRENT_SIGN"
const DOT="DOT"
const ZERO='ZERO'
const calculatorReducer = (state = initialState, action) => {

    switch (action.type) {
      case CURRENT_NUMBER:{
        return produce(state,newState =>{
          if(newState.currentVal.length<20) { 
            if(newState.currentVal.slice(1,2).includes('.')===false){
              newState.currentVal.startsWith('0') ?  newState.currentVal = newState.currentVal.slice(1) + action.payload : newState.currentVal += action.payload
            }
            else{
              newState.currentVal += action.payload
            }
            newState.formula += action.payload
            newState.check=true;
            newState.checkSign=false
          }
          else{
              newState.currentVal ="FULL"
              newState.formula = 'FULL'
            };
            
          })
    }
    case CURRENT_SIGN:{
      return produce(state,newState =>{
        newState.currentSign = action.payload ; 
        newState.dot='.'
          if(['*','/'].includes(newState.formula[newState.formula.length-1])){
            if(action.payload==='-'){
              newState.formula = newState.formula.concat(action.payload)
            }
            if(action.payload!=='-'){
            newState.formula = newState.formula.replace(/[*/]$/,action.payload)
            }
          }
          else if(['+','-'].includes(newState.formula[newState.formula.length-1])){
            if(['/-','*-'].includes(newState.formula.slice(-2))){
            newState.formula = newState.formula.replace(/\/-$/,action.payload)
            newState.formula = newState.formula.replace(/\*-$/,action.payload)
          }
          else {
             newState.formula = newState.formula.replace(/[+-]$/,action.payload)
            }
          }
        else if(newState.value!==''){
          newState.formula = newState.value.slice(1)
          newState.formula +=action.payload;
          newState.check=true;
          
        }
        else{
             newState.formula +=action.payload;
        }
        newState.currentVal =''
        newState.checkSign = true;
      })
      }
      case CLEAR :{
        return produce(state,newState =>{
          newState.currentVal = "0"
          newState.formula = ''
          newState.value=''
          newState.currentSign="0"
          newState.dot='.'
        })
    }
    case VALUE:{
      return produce(state,newState =>{
        newState.value = `= ${action.payload}`;
        newState.currentVal =  newState.value.slice(1);
        newState.check=false
      })
    }
    case DOT:{
      return produce(state,newState=>{  
        if(newState.value!=='' && ['+','-','/','*','0'].includes(newState.formula[newState.formula.length-1])===false){
          newState.formula = 0
          newState.check=true;
          newState.currentVal=0
        }
        newState.currentVal += newState.dot
        newState.formula += newState.dot
        newState.dot=''
      })
    }
    case ZERO:{
        return produce(state,newState=>{
           if(newState.currentVal==='0'){
            newState.currentVal=  newState.currentVal.slice(1)
           }
          if( newState.value!=='' && ['+','-','/','*','.'].includes(newState.formula[newState.formula.length-1])===false){
            newState.formula = ''
             newState.formula +=action.payload;
            newState.check=true;
            newState.currentVal='0'
            newState.value=''
          }
          else{
            newState.currentVal += action.payload
            newState.formula += action.payload
            newState.check=true;
            newState.checkSign=false
          }
        })
    }
    default:
        return state;
  }}

export default calculatorReducer;