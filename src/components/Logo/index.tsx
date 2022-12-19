import React, { memo } from 'react'
import styled from 'styled-components'

import LogoImg from './img/Logo.svg'

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

const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoImg} alt="logo" />
    </StyledLogo>
  )
}

export default memo(Logo)
