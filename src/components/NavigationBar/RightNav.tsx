import React, { ReactElement, memo, useEffect, useState } from 'react'
import styled from 'styled-components'

export interface Props {
  open: boolean
}

const List = memo(styled.ul<Props>`
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
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
        padding-left: 18px;

        &:hover {
            background-color: red;
        }
    }

    @media (min-width: 1020px) {
        flex-flow: column nowrap;
        margin-top: 2px;
    
        li {
          padding: 18px 20px;
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
        a {
            color: black;
            cursor: pointer;
            font-size: 24px;
            font-weight: 600;
            text-decoration: none;
            transition: .2s ease;
            
            &:hover {
              color: black;
            }
          }
        
    }
`)
const RightNav = ({ open }: { open: boolean }): ReactElement => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  //   const handleBurguer = () => {
  //     setIsOpen(!open)
  //   }

  return (
    <List open={isOpen}>
      {/* {routes.map((route, index) =>
            (
                <StyledLink key={index}>
                    <Link to={route.to} onClick={handleBurguer}>
                        {route.label}
                    </Link>
                </StyledLink>
            )
        )} */}
    </List>
  )
}

export default memo(RightNav)
