import React, { memo } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import { useLocation } from 'react-router-dom'

const StyledFooter = memo(styled.section`
    background: white;
    display: block;
    padding: 50px 20px;
    width: 100%;

    &.hide_footer{
      display: none;
    }

    @media (min-width: 720px) {
      width: 80%;
      margin: 0 auto;
    }
  
    @media (min-width: 1020px) {
  
    }
`)

const Footer: React.FunctionComponent = props => {
  const { pathname } = useLocation()

  return (
    <StyledFooter className={(pathname === '/' || pathname === '/sign-up' || pathname === '/sign-in') ? 'hide_footer' : ''}>
      <Logo />
    </StyledFooter>)
}

export default memo(Footer)
