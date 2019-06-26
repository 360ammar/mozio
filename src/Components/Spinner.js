import React from "react"
import styled  from "styled-components"

type Props = {
     size? : number 
}

const Spinner: React$ComponentType<Props> = ({size}) => (
  <StyledSpinner size={size} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </StyledSpinner>
);

const StyledSpinner = styled('svg')`
  animation: rotate 1s linear infinite;
  width:  ${({size}: any) => size ? `${size}px` : '50px' };
  height: ${({size}: any) => size ? `${size}px` : '50px' };

  & .path {
    stroke: #428BCA;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export default Spinner
