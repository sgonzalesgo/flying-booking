import React from 'react'
import styled from 'styled-components'

export const InputContainer = styled.div`
  background-color: #fff;
  position: relative;
  cursor: pointer;
  display: block;
  border: 1px solid rgba(51,51,51, 0.3);
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  ${props => props.paddingLeft ? `padding-left: ${props.paddingLeft};` : ''}
  ${props => props.disabled ? 'opacity: 0.3;' : ''}
`

export const InputLabel = styled.small`
  display: block;
  opacity: 0.6;
  cursor: pointer;
  position: absolute;
  left: 0.8rem;
  top: 0.5rem;
`

export const InputPlaceholder = styled.label`
  display: block;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.35;
  position: relative;
  padding: 23px 12px 6px;
  font-weight: 300;
`
