import React from 'react'
import styled from 'styled-components'
import { Container } from '.'
import { Link } from 'react-router-dom'

const Nav = styled.header`
  color: #333333;
  background-color: #fafafb;
  height: 50px;
  border-top: 3px solid #428BCA;
  box-shadow: 0 1px 0 #0c0d0e1a,0 1px 6px #3b40451a;
  display: flex;
  align-items: center;
`
const Logo = styled.div`
  background-image: url('./images/Logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 40px;
`

const NavBar = () => {
  return (
    <Nav>
      <Container>
        <Link to="/"><Logo /></ Link>
      </Container>
    </Nav>
  )
}
export default NavBar
