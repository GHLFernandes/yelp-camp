import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'

import LogoImg from './img/Logo.svg'

const StyledLogo = styled.div`

    @media (min-width: 1020px) {
        width: 100%;
        position: relative;
    }
`

const Logo = (): ReactElement => {
  return (
    <StyledLogo>
      <img src={LogoImg} alt="logo" />
    </StyledLogo>
  )
}

export default memo(Logo)
