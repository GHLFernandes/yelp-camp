import React from 'react'
import styled from 'styled-components'

import Logo from './img/Logo.svg'

const StyledLogo = styled.div`
    display: block;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 110px;
    padding-bottom: 90px;
    margin-left: 20px;

`

export default function Header () {
  return (
    <StyledLogo></StyledLogo>
  )
}
