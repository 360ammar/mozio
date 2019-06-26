// @flow weak
import React from 'react'
import styled from 'styled-components'
import { Label, Spinner } from './'

const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 20px;
`
const AutoCompleteList = styled.div`
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
`

const AutoCompleteItem = styled.div`
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
  &:hover {
    background-color: #e9e9e9;
  }
`

const StyledInput = styled.input`
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
  width: 96%;
`

const StyledSpinner = styled.div`
  position: absolute;
  right: 6px;
  top: 27px;
`

type Props = {
  name: string,
  placeholder: string,
  label?: string,
  loading?: boolean,
  forwardRef?: (el: any) => void,
  getName: (name: string, context: string) => void,
  state: Object
}

const handleAutoComplete = ({target},getName) => {
//  getName(target.value, target.name)
} 

const AutoComplete: React$ComponentType<Props> = ({
  name,
  placeholder,
  label,
  loading,
  forwardRef,
  getName,
  state
}) => (
  <StyledDiv>
    <Label>{label}</Label>
    <StyledInput
      type='text'
      ref={forwardRef}
      name={name}
      placeholder={placeholder}
      onChange={e => handleAutoComplete(e,getName)}
    />
    {loading && (
      <StyledSpinner>
        <Spinner size={25} />
      </StyledSpinner>
    )}
   {state.context === name && <AutoCompleteList>
     { 
       state.locations.map(location => { 
         return <AutoCompleteItem>
            {location}
        </AutoCompleteItem> 
       })
     }
       
   </AutoCompleteList> }
  </StyledDiv>
)

export default React.forwardRef<Props, _>((props, ref) => (
  <AutoComplete forwardRef={ref} {...props} />
))
