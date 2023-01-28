import React, { FC, memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Burguer from './Burguer'
import { useLocation } from 'react-router-dom'

const Nav = memo(styled.nav`
	position: relative;
	top: 0;
	height: 80px;
	width: 100%;
	display: flex;
  justify-content: space-between;
	z-index: 99;
  padding: 10px 20px;
	background-color: white;

	&.fixed{
		position: fixed;
	}

	.logo {
		margin-top: 25px;
	}

  &.hide_navbar{
    display: none;
  }

  @media (min-width: 720px) {
    padding: 10px 11%;
  }

  @media (min-width: 1020px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(12, 1fr);
    max-width: 100%;
    padding: 0;
    justify-content: space-around;

    .logo {
      display: grid;
      grid-row: 1;
      grid-column: 2;
    }
  }
`)

const NavBar: FC = () => {
  const [offset, setOffset] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = (): void => setOffset(window.pageYOffset)

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (

    <Nav className={` ${(offset > 0 && (pathname !== '/' && pathname !== '/sign-up' && pathname !== '/sign-in') ? 'fixed' : '')} ${((pathname === '/' || pathname === '/sign-up' || pathname === '/sign-in') ? 'hide_navbar' : '')}` }>
      <div className='logo'>
        <Logo />
      </div>
      <Burguer/>
    </Nav>
  )
}

export default memo(NavBar)
