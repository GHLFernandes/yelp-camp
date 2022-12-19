import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const StyledFooter = memo(styled.section`
    background: white;
    display: block;
    padding: 50px 20px;
    width: 100%;

`)

const Footer = (): ReactElement => {
  return (
    <StyledFooter>
      <Logo />
    </StyledFooter>)
}

export default memo(Footer)
