import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'

import LogoImg from './img/Logo.svg'
import { Link } from 'react-router-dom'

const StyledLogo = styled.div`
    img{
      width: 150px;
    }

    @media (min-width: 1020px) {
        width: 100%;
        position: relative;
    }
`

const Logo: FC = () => {
  return (
    <StyledLogo>
      <Link to='/'>
        <img src={LogoImg} alt="logo" />
      </Link>
    </StyledLogo>
  )
}

export default memo(Logo)
