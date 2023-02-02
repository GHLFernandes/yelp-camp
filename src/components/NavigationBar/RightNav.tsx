import type { FC } from 'react'
import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import routes from '../../_routes'
import { Link } from 'react-router-dom'
import Account from '../Account'

export interface RightNavProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledRightNav = memo(styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 1;
  margin-left: 20px;
  margin-top: 14px;
`)

const MenuList = memo(styled.ul<RightNavProps>`

  @media (max-width: 1020px) {
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: #3f3f3f;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    padding: 0;
    height: 100vh;
    width: 200px;
    padding-top: 6rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;
  
    li {
      color: white;
      padding: 10px 0 10px 20px;
      margin-bottom: 5px;
      &:hover {
          background-color: #b3b3b3;
      }
    }
  
  }

  @media (min-width: 720px) {
    width: 300px;

  }

  @media (min-width: 1020px) {
      display: flex;
      width: 100%;
      justify-content: end;
      padding: 0;

      li a {
        padding: 17px 30px;
        color: black;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        transition: .2s ease;
        
        &:hover {
          color: #7c7c7c;
        }
      }

      li:last-child a {
        background-color:black;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        border: 1px solid black;
        transition: all .3s linear;
        margin-left: 30px;

          &:hover {
            background-color:white;
            color: black;
            border: 1px solid black;
            cursor: pointer;
        }
      }

  }
`)

const StyledLink = memo(styled.li`

    a {      
        color:white;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        transition: .2s ease;
        
        &:hover {
          color:white;
        }
    }

    @media (min-width: 1020px) {
      display: flex;
      justify-content: space-between;

      
    }
`)

const StyledUser = memo(styled.div`
  @media (max-width: 1020px) { 
    div{
        color: white;
        margin-top: 15px;
        width: 100%;

        #user-email-navbar, #log-out-navbar{
          font-size: 20px;
          padding: 10px 0 10px 20px;

        }

        #log-out-navbar{
          display: inline-block;
          width: 100%;
          color: white;

          &:hover {
              background-color: #b3b3b3;
              cursor: pointer;
              text-decoration: underline;
          }
        }
    }
  }

    @media (min-width: 1020px) {
      display: flex
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      text-align: end;
      width: min-content;

      div{
        padding-top: 17px;

        #log-out-navbar, #user-email-navbar{
          color: #7c7c7c;
          margin-left: 40px;
        }
        #log-out-navbar:hover{
          cursor: pointer;
          color: black;
        }
      }
    }
`)

const RightNav: FC<RightNavProps> = (props) => {
  const { open, setOpen } = props
  const user = localStorage.getItem('user')

  useEffect(() => {
    setOpen(open)
  }, [open, setOpen])

  return (
    <StyledRightNav>
      <MenuList open={open}>
        {(user !== null && user !== '') && routes.map((route, index) =>
          (((route.nav) && (route.showWhenLoggedIn)) &&
            <StyledLink key={index}>
              {
                <Link to={route.path} onClick={ () => { setOpen(!open) } }>
                  {route.name}
                </Link>
              }

            </StyledLink>
          )
        )}
        {(user == null || user === '') && routes.map((route, index) =>
          (((route.nav) && (route.showWhenLoggedOut)) &&
            <StyledLink key={index}>
              {
                <Link to={route.path} onClick={ () => { setOpen(!open) } }>
                  {route.name}
                </Link>
              }
            </StyledLink>
          )
        )}
        {((user) &&
          <StyledUser>
            <Account />
          </StyledUser>
        )}
      </MenuList>

    </StyledRightNav>
  )
}

export default memo(RightNav)
