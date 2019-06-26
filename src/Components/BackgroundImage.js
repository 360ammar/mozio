import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-image: url('./images/cars-min.jpg');
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -10;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
`

const ColorFilter = styled.div`
  background-image: url('./images/blue-wash.png');
  background-repeat: repeat;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`

const GridPattern = styled.div`
  background-image: url('./images/grid-pattern.png');
  background-repeat: repeat;
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`

const Gradient = styled.div`
  background-image: url('images/black-gradient.png');
  background-repeat: repeat-x;
  background-position: top center;
  background-color: transparent;
  width: 100%;
  height: 195px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -8;
`

const BackgroundImage = () => {
  return (
    <React.Fragment>
      <Background />
      <Gradient />
      <GridPattern />
      <ColorFilter />
    </React.Fragment>
  )
}

export default BackgroundImage
