import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: inline-block;
    padding: 20px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    margin: 20px 0;
    transition: all .1s linear;
    border: 1px solid transparent;

    &:hover, :focus{
        background-color: white;
        color: black;
        border: 1px solid black;
    }

`

export default function Button ({ children }: { children?: React.ReactNode }) {
  return (
    <StyledButton>{children}</StyledButton>
  )
}
