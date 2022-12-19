import React, { ReactElement, memo, useEffect, useState } from 'react'
// import Logo from '../Logo'
import styled from 'styled-components'
import Logo from '../Logo'
import Burguer from './Burguer'

const Nav = memo(styled.nav`
	position: sticky;
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
`)

const NavBar = (): ReactElement => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = (): void => setOffset(window.pageYOffset)

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Nav className={offset > 0 ? 'fixed' : ''}>
      <div className='logo'>
        <Logo />
      </div>
      <Burguer />
    </Nav>
  )
}

export default memo(NavBar)
