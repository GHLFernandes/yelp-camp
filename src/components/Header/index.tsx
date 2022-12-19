import React from 'react'
import styled from 'styled-components'

import Logo from './img/Logo.svg'

const StyledLogo = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    background-color: white;
    padding-top: 20px;

    @media (min-width: 1020px) {
        width: 100%;
        position: relative;
    }
`

export default function Header () {
  return (
    <StyledLogo>
      <img src={Logo} alt="logo" />
    </StyledLogo>
  )
}
