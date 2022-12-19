import React, { ReactElement, memo } from 'react'
// import Logo from '../Logo'
import styled from 'styled-components'

const Nav = memo(styled.nav`
  position: relative;
  top: 0;
	width: 100%;
	height: 65px;
	border-bottom: 2px solid #f1f1f1;
	display: flex;
	justify-content: space-between;
	z-index: 99;

	&.fixed{
		position: fixed;
	}


	.logo {
		margin-top: 5px;
	}
`)

const NavBar = (): ReactElement => {
  return (
    <Nav>Header </Nav>
  )
}

export default memo(NavBar)
