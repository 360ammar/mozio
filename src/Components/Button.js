/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: #ffffff;
  position: relative;
  background-color: #f6b900;
  border: 1px solid transparent;
  letter-spacing: 1px;
  border-radius: 5px;
  font-size: 0.87rem;
  padding: 0.62em 0.94em;
  cursor: pointer;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  margin-top: 15px;
  &:hover {
    background-color: #dca600;
  }
`

type Props = {
  children?: React$Node
}

const Button: React$ComponentType<Props> = ({children}) => <StyledButton>{children}</StyledButton>
export default Button
