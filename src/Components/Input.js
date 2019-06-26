// @flow weak
import React from 'react'
import styled from 'styled-components'
import { Label } from './'

const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 20px;
`

const StyledInput = styled.input`
  border: 1px solid transparent;
  background-color: #f1f1f1;
  padding: 10px;
  font-size: 16px;
  width: 96%;
`

type Props = {
  name: string,
  placeholder?: string,
  label? : string,
  type : string,
  forwardRef?: (el: any) => void,
}

const Input: React$ComponentType<Props> = ({ name, placeholder, label, type,forwardRef }) => (
  <StyledDiv>
    <Label>{label}</Label><StyledInput type={type} ref={forwardRef} name={name} placeholder={placeholder} />
  </StyledDiv>
)

export default React.forwardRef<Props, _>((props, ref) => (
  <Input forwardRef={ref} {...props} />
))
