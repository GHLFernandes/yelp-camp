import type { FC } from 'react'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Burguer from './Burguer'
import { useLocation } from 'react-router-dom'
import BackCamp from '../BackCamp'

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

	&.fixeds{
		position: fixed;
	}

	.logo {
		margin-top: 20px;
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

const Nav2 = memo(styled.div`
  height: 150px;
  z-index: 9999;
  float: right;
  margin-right: 20px;

  .logo{
    position: absolute;
    display: block;
    top: 36px;
    width: 30%;
    padding: 0 20px;
  }

  .back-camp{
    margin-top: 15px;
    float: right;

    a{
      text-decoration: none;
      color: #6B6874;
      z-index: 99;

    }

    span{
      font-size: 25px;
    }
  }

  .hide{
    display: none;
  }

  @media (min-width: 720px) {
    height: 0;
    padding: 0px 8%;
    margin-bottom: 25px;

    .logo{
      position: relative;
    }

    .back-camp{
      margin-top: 0;
    }
  }

  @media (min-width: 1020px) {
    padding: 0;
    height: 0;
    margin-bottom: 0;
    grid-template-rows: 100px 1fr;
    grid-template-columns: repeat(12, 1fr);
    display: grid;

    .logo{
        display: grid;
        padding: 30px 16%;
        grid-column: 2 / span 3;
        grid-row: 1;
        top: 0px;
      }

    .back-camp{
      display: grid;
      padding: 30px;
      grid-column: 6 / span 3;
      grid-row: 1;

      span{
        font-size: 30px;
      }
    }
  }
`)

const NavBar: FC = () => {
  const [offset, setOffset] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = (): void => { setOffset(window.pageYOffset) }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <>
      { (pathname !== '/' && pathname !== '/sign-up' && pathname !== '/sign-in')
        ? <Nav className={` ${(offset > 0 && (pathname !== '/' && pathname !== '/sign-up' && pathname !== '/sign-in') ? 'fixeds' : '')}` }>
          <div className='logo'>
            <Logo />
          </div>
          <Burguer/>
        </Nav>
        : <Nav2 className='head'>
          <div className='logo'>
            <Logo />
          </div>
          <div className={`back-camp ${((pathname === '/') ? 'hide' : '')} ` }>
            <BackCamp />
          </div>
        </Nav2>
      }
    </>

  )
}

export default memo(NavBar)
