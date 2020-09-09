import React from 'react'
import styled from 'styled-components'

const CounterBtn = styled.button`
  background-color: '#F2F2F2';
  color: '#333333';
  font-size: 1.25rem;
  border: 1px solid #ccc;
  display: table-cell;
  position: relative;
  width: 30px;
  height: 36px;
  vertical-align: middle;
  cursor: pointer;
  &:focus {
    outline: none !important;
  }
`
const CounterInput = styled.input`
  font-size: 1.25rem;
  display: table-cell;
  text-align: center;
  height: 36px;
  width: 36px;
  padding-top: 4px;
  border: 1px solid #ccc;
  vertical-align: middle;
  border-radius: 0!important;
  box-shadow: none;
  font: 100 1.2rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
`

const Counter = ({ count, setCount, min=0, max=1000 }) => {

  const handleIncrement = () => {
    if (count !== max) {
      setCount(count + 1)
    }
  }

  const handleDecrement = () => {
    if (count !== min) {
      setCount(count - 1)
    }
  }

  const handleInputValueChanged = (event) => {
    const count = parseInt(event.target.value)
    setCount(count === NaN ? 0 : count )
  }

  return (
    <div>
      {/* Minus Btn */}
      <CounterBtn onClick={ handleDecrement }>-</CounterBtn>
      {/* Counter Input */}
      <CounterInput value={ count } onChange={handleInputValueChanged} />
      {/* Plus Btn */}
      <CounterBtn onClick={ handleIncrement }>+</CounterBtn>
    </div>
  )
}

export default Counter