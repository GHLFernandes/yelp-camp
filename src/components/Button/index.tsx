import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'

const StyledButton = memo(styled.button`
    display: inline-block;
    padding: 20px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    margin: 20px 0;
    transition: all .3s linear;
    border: 1px solid transparent;

    &:hover, :focus{
        background-color: white;
        color: black;
        border: 1px solid black;
        cursor: pointer;
    }

    &.full-width{
      width: 100%;
    }

`)

const Button = ({ children, className, type, disabled }: { children?: React.ReactNode, className: string, type: string, disabled?: boolean }): ReactElement => {
  return (
    <StyledButton className={className} type={type} disabled={disabled}>{children}</StyledButton>
  )
}

export default memo(Button)
