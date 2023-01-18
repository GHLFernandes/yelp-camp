/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { ReactElement, memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import routes from '../../_routes'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../common/contexts/UserAuthContext'

export interface Props {
  open: boolean
}

const StyledRightNav = memo(styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 1;
  margin-left: 20px;
`)

const List = memo(styled.ul<Props>`
  list-style: none;
  display: flex;

  @media (max-width: 1020px) {
    flex-flow: column nowrap;
    background-color: red;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    padding: 0;
    height: 100vh;
    width: 200px;
    padding-top: 4.5rem;
    margin-top: 0;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;

      &:hover {
          background-color: red;
      }
    }
  }

  @media (min-width: 1020px) {
      grid-row: 1;
      width: 100%;
      grid-column: 1;
      flex-flow: row nowrap;
      color: black;
      justify-content: space-between;
      padding: 0;
  
      li {
        padding: 17px 20px;
      }
  }
`)

const StyledLink = memo(styled.li`

    a {      
        color:white;
        cursor: pointer;
        font-size: 24px;
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

      a {
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
        
    }
`)

const StyledUser = memo(styled.div`
@media (min-width: 1020px) {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  text-align: end;
  width: min-content;

  div{
    #log-out-navbar{
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

const StyledAnonymous = memo(styled.div`
@media (min-width: 1020px) {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  font-weight: 700;
  text-align: center;
  align-self: center;

  a{
    color:black;
    text-decoration: none;
    font-size: 18px;
  }

  a:first-child{
    text-align: end;
    padding-right: 40px;
  }

  #sign-up-navbar{
    background-color:black;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    border: 1px solid black;
    transition: all .3s linear;

  }

  #sign-up-navbar:hover{
    background-color:white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
  }
}
`)

const RightNav = ({ open }: { open: boolean }): ReactElement => {
  const [isOpen, setIsOpen] = useState(open)
  const { signOutUser, user } = useUserAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleBurguer = () => {
    setIsOpen(!open)
  }

  const handleLogout = async (): Promise<void> => {
    try {
      await signOutUser()
      navigate('/sign-in')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledRightNav>
      <List open={isOpen}>
        { routes.map((route, index) =>
          (
            <StyledLink key={index}>
              <Link to={route.to} onClick={handleBurguer}>
                {route.label}
              </Link>
            </StyledLink>
          )
        )}
        {((!user)
          ? <StyledAnonymous>
            <Link to='/sign-in'>
              <span>Login</span>
            </Link>
            <Link to='/sign-up'>
              <span id='sign-up-navbar'>Create an account</span>
            </Link>
          </StyledAnonymous>
          : <StyledUser>
            <div>
              {user.email}
            </div>
            <div>
              <span id='log-out-navbar' onClick={handleLogout}>
                Logout
              </span>
            </div>
          </StyledUser>)}
      </List>

    </StyledRightNav>
  )
}

export default memo(RightNav)
