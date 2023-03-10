import type { FC } from 'react'
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
      width: 100%;
      margin: 0 auto;
      padding: 20px 11%;
    }
  
    @media (min-width: 1020px) {
      padding: 20px 8.3%;
    }
`)

const Footer: FC = () => {
  const { pathname } = useLocation()

  return (
    <StyledFooter className={(pathname === '/' || pathname === '/sign-up' || pathname === '/sign-in') ? 'hide_footer' : ''}>
      <Logo />
    </StyledFooter>)
}

export default memo(Footer)
