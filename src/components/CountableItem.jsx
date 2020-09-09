import React from 'react'
import styled from 'styled-components'

import Counter from './Counter.jsx'

const CountableItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CountableItemHeader = styled.label`
  line-height: 1.3;
  color: #333;
`
const CountableItemSubheader = styled.small`
  opacity: 0.6;
  display: block;
`

const CountableItemHeaderContainer = styled.div`
  padding-right: 1.0rem;
`

const CountableItem = ({ header, subheader, count, onChange, min, max }) => {

  const handleCountChange = ( count ) => {
    onChange(count)
  }
  return (
    <CountableItemContainer>
      <CountableItemHeaderContainer>
        <CountableItemHeader>
          { header}
          <CountableItemSubheader>
            { subheader }
          </CountableItemSubheader>
        </CountableItemHeader>
      </CountableItemHeaderContainer>
      <Counter count={ count } setCount={ handleCountChange } min={ min } max={ max } />
    </CountableItemContainer>
  )
}

export default CountableItem