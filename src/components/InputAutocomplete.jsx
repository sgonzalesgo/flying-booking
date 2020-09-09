import React from 'react'
import styled from 'styled-components'

const AutocompleteListContainer = styled.div`
  background-color: #fff;
  width: 100%;
  position: absolute;
  margin-top: 0.1rem;
  z-index: 99;
  display: ${props => props.show ? 'block': 'none' };
`

const AutocompleteList = styled.ul`
  list-style: none;
  width: 100%;
  padding-left: 0;
  margin: 0;
`

const AutocompleteListItem = styled.li`
  padding: 1ex .5ex 1ex 1.5rem;
  cursor: pointer;
  ${props => props.hoverable 
    ? `&:hover {
        background: #c00;
        color: #fff;
      }` 
    : ''}
`

const AutocompleteListItemLabel = styled.label`
  margin-right: 0.5rem;
`

const AutocompleteListItemTag = styled.span`
  font-weight: 700;
  color: #fff;
  background: #333;
  border-radius: 3px;
  font-size: 0.7em;
  text-transform: uppercase;
  padding: .2em .5em;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  max-width: 4em;
  overflow: hidden;
  text-overflow: ellipsis;
  top: 0;
`

export const InputAutocompleteItem = ({ label, tag, hoverable, onClick }) => {

  const renderTag = (tag) => {
    return tag 
      ? (<AutocompleteListItemTag>{ tag }</AutocompleteListItemTag>)
      : null
  }
  return (
    <AutocompleteListItem onClick={ onClick } hoverable={ hoverable }>
      <AutocompleteListItemLabel>
        { label }
      </AutocompleteListItemLabel>
      { renderTag(tag) }
    </AutocompleteListItem>
  )
}
const InputAutocomplete = ({ items=[{ id:1, label: "Miami", tag: "MI"}], onSelected, show }) => {

  const handleOptionSelected = ( optionLabel ) => {
    onSelected(optionLabel)
  }
  const renderItems = () => {
    return items && items.length 
      ? items.map((item) => {
          const { label, tag } = item
          return (
            <InputAutocompleteItem 
              label={ label } 
              tag={ tag } 
              key={ label }
              hoverable
              onClick={ () => { handleOptionSelected(label) } } />
          )
        })
      : (<InputAutocompleteItem label="No items found" />)
  }
  return (
    <AutocompleteListContainer show={ show }>
      <AutocompleteList>
        { renderItems() }
      </AutocompleteList>
    </AutocompleteListContainer>
  )
}

export default InputAutocomplete

