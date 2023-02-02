import type { FC } from 'react'
import React, { useState, useEffect, memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useUserAuth } from '../../common/contexts/UserAuthContext'

interface IUserInfo {
  displayName: string
  email: string
  phoneNumber: string
  photoURL: string
  providerId: string
  uid: string
}

const Dropdown = styled.ul`
    @media(min-width: 1020px){
        ul{
            padding: 0;
            margin-bottom: 20px;

        }

        .nav-user-item{
            display: initial;
        }

    }
`
const StyledAccount = styled.div`
    @media(min-width: 1020px){
        padding-left: 20px;
    }
`
const StyledAccountBurger = styled.div`
    li a{
      text-decoration: none;
      color: white;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
    }
    @media(min-width: 1020px){
        padding-left: 20px;
    }
`

const Account: FC = () => {
  const { signOutUser } = useUserAuth()
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = localStorage.getItem('user')

      setUserInfo(JSON.parse(user ?? '')?.providerData[0])
      console.log(userInfo)
    } else {
      console.log('Not a registered user')
    }
  }, [])

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  })

  const setDimension = (): void => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  const handleLogout = async (): Promise<void> => {
    await signOutUser()
      .then(() => {
      })
      .catch((err: unknown) => {
        console.log(err)
      })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)
    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <>{screenSize.dynamicWidth >= 1020
      ? userInfo && <StyledAccount className="dropdown">
        { <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          {(userInfo.photoURL)
            ? <img src={userInfo?.photoURL} alt="mdo" width="32" height="32" className="rounded-circle"/>
            : <i className="fa-solid fa-circle-user fa-xl"></i>
          }

        </a> }
        <Dropdown className="dropdown-menu text-small">
          <li className='nav-user-item'>
            <Link to='/user-profile' >
              <span className="dropdown-item">Profile</span>
            </Link>
          </li>
          <li className='nav-user-item'>
            <Link to='/change-pass' >
              <span className="dropdown-item">Change Password</span>
            </Link>
          </li>
          <li><hr className="dropdown-divider"/></li>
          <li onClick={handleLogout}>
            <span className="dropdown-item">Sign out</span>
          </li>
        </Dropdown>
      </StyledAccount>
      : <StyledAccountBurger>
        <li>
          <Link to='/user-profile' >
            <span className="dropdown-item">Profile</span>
          </Link>
        </li>
        <li>
          <Link to='/change-pass' >
            <span className="dropdown-item">Change Password</span>
          </Link>
        </li>
        <li><hr className="dropdown-divider"/></li>
        <li onClick={handleLogout}>
          <span className="dropdown-item">Sign out</span>
        </li>
      </StyledAccountBurger>
    }

    </>
  )
}

export default memo(Account)
