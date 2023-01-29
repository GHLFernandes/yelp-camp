/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-misused-promises */
import type { FC } from 'react'
import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import routes from '../../_routes'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../common/contexts/UserAuthContext'
import { auth } from '../../config/firebase'

export interface RightNavProps {
  open: boolean
}

const StyledRightNav = memo(styled.div`
  display: grid;
  grid-row: 1;
  grid-column: 1;
  margin-left: 20px;
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
      padding-left: 20px;
      &:hover {
          background-color: red;
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

      
    }
`)

const StyledUser = memo(styled.div`
    div{
      color: white;
      padding-left: 20px;

      #user-email-navbar, #log-out-navbar{
        font-size: 20px;
      }
    }

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

// const StyledAnonymous = memo(styled.div`
// @media (min-width: 1020px) {
//   display: grid;
//   grid-template-rows: 1fr;
//   grid-template-columns: repeat(2, 1fr);
//   align-items: center;
//   font-weight: 700;
//   text-align: center;
//   align-self: center;

//   a{
//     color:black;
//     text-decoration: none;
//     font-size: 18px;
//   }

//   a:first-child{
//     text-align: end;
//     padding-right: 40px;
//   }

//   #sign-up-navbar{
//     background-color:black;
//     color: white;
//     padding: 15px 20px;
//     border-radius: 5px;
//     border: 1px solid black;
//     transition: all .3s linear;

//   }

//   #sign-up-navbar:hover{
//     background-color:white;
//     color: black;
//     border: 1px solid black;
//     cursor: pointer;
//   }
// }
// `)

const RightNav: FC<RightNavProps> = (props) => {
  const { open } = props
  const [isOpen, setIsOpen] = useState(open)
  const { signOutUser } = useUserAuth()
  const navigate = useNavigate()
  const user = auth.currentUser
  // const [hasUser, setHasUser] = useState(false)

  // if (user) {
  //   setHasUser(true)
  // }s

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
      <MenuList open={isOpen}>
        {routes.map((route, index) =>
          (
            <StyledLink key={index}>
              { (user && route.nav && route.showWhenLoggedIn)
                ? <Link to={route.path} onClick={handleBurguer}>
                  {route.name}
                </Link>
                : null
              }

            </StyledLink>
          )
        )}
        { routes.map((route, index) =>
          (
            <StyledLink key={index}>
              { (!user && route.nav && route.showWhenLoggedOut)
                ? <Link to={route.path} onClick={handleBurguer}>
                  {route.name}
                </Link>
                : null
              }

            </StyledLink>
          )
        )}
        {((user) &&
          <StyledUser>
            <div>
              <span id='user-email-navbar'> {user?.email} </span>
            </div>
            <div>
              <span id='log-out-navbar' onClick={ handleLogout }>
                Logout
              </span>
            </div>
          </StyledUser>
        )}
      </MenuList>

    </StyledRightNav>
  )
}

export default memo(RightNav)
