import React, { memo, ReactElement, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import RightNav from './RightNav'

export interface Props {
  open: boolean
}

const StyledDiv = memo(styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;

    &.hide_navbar{
      display:none;
    }
`)

const StyledBurger = memo(styled.div<Props>`
  width: 1rem;
  height: 1rem;
  position: fixed;
  padding: 10px;
  top: 32px;
  right: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  row-gap: 2px;

  @media (min-width: 1020px) {
    display: none;
  }

  div {
    width: 1rem;
    height: 0.15rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      margin-top:  ${({ open }) => open ? '3px' : '0'};
      margin-left:  ${({ open }) => open ? '2px' : '0'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      margin-left:  ${({ open }) => open ? '2px' : '0'};
    }
  }
`)

const Burguer = (): ReactElement => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    console.log(pathname)
  }, [pathname])

  return (
    <StyledDiv className={pathname === '/' ? 'hide_navbar' : ''}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </StyledDiv>
  )
}

export default memo(Burguer)
