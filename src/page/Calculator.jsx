import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAll, getDot, getEqual, getSign, getValue, getZero } from '../actions/calculator'

Calculator.propTypes = {}
function Calculator(props) {
  const currentVal = useSelector(state => state.calculator.currentVal)
  const formula = useSelector(state => state.calculator.formula)
  const value = useSelector(state => state.calculator.value)
  const check = useSelector(state => state.calculator.check)
  const checkSign = useSelector(state => state.calculator.checkSign)
  const currentSign = useSelector(state => state.calculator.currentSign)
  const dispatch = useDispatch()
  const handleCurrVal = e => {
    const action = getValue(e.target.value)
    dispatch(action)
  }
  const clear = () => {
    const action = clearAll()
    dispatch(action)
  }
  const calculate = () => {
    try {
      const equal = eval(formula)
      const action = getEqual(equal)
      dispatch(action)
    } catch (error) {}
  }
  const handleCurrSign = e => {
    const action = getSign(e.target.value)
    dispatch(action)
  }
  const handleDot = e => {
    const action = getDot(e.target.value)
    dispatch(action)
  }
  const handleZero = e => {
    const action = getZero(e.target.value)
    dispatch(action)
  }
  return (
    <div className="App text-center items-center min-h-[100vh] bg-[#c2c2d6] p-[12.5rem] ">
      <div className=" w-[20.875rem] border-[1px] border-solid bg-black p-[5px] relative m-[auto] ">
        <div
          className=" bg-black text-[20px] text-[#FF8C00] text-right h-[1.875rem] "
          style={{ fontFamily: 'Digital-7' }}
        >
          {check === true ? `${formula}` : `${formula}  ${value}`}
        </div>

        <div className="text-[29px] text-white text-right" style={{ fontFamily: 'Digital-7' }}>
          {checkSign === true ? `${currentSign}` : `${currentVal}`}
        </div>
        <div className="flex  flex-wrap" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
          <button className="w-[10rem] bg-[#ac3939] button" onClick={clear} value="AC">
            AC
          </button>
          <button className="button bg-[#666666]" onClick={handleCurrSign} value="/">
            /
          </button>
          <button className="button bg-[#666666]   " onClick={handleCurrSign} value="*">
            x
          </button>
          <button className="button" onClick={handleCurrVal} value="7">
            7
          </button>
          <button className="button" onClick={handleCurrVal} value="8">
            8
          </button>
          <button className="button" onClick={handleCurrVal} value="9">
            9
          </button>
          <button className="button bg-[#666666]" onClick={handleCurrSign} value="-">
            -
          </button>
          <button className="button" onClick={handleCurrVal} value="4">
            4
          </button>
          <button className="button" onClick={handleCurrVal} value="5">
            5
          </button>
          <button className="button" onClick={handleCurrVal} value="6">
            6
          </button>
          <button className="button bg-[#666666]" onClick={handleCurrSign} value="+">
            +
          </button>
          <button className="button" onClick={handleCurrVal} value="1">
            1
          </button>
          <button className="button" onClick={handleCurrVal} value="2">
            2
          </button>
          <button className="button" onClick={handleCurrVal} value="3">
            3
          </button>
          <button
            className="w-[5rem] h-[8.125rem] bg-[#004466] button absolute bottom-[5px] right-[7px]"
            onClick={calculate}
            value="="
          >
            =
          </button>
          <button className="w-[10rem] bg-[#4d4d4d] button" onClick={handleZero} value="0">
            0
          </button>
          <button className="button" onClick={handleDot} value=".">
            .
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
