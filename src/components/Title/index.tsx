import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'
interface TitleProps {
  children?: React.ReactNode
  className?: string
}

const StyledTitle = memo(styled.h1`
    display: inline-block;
    margin: 10px 0;

    @media (min-width: 1020px) {
      font-size: 28px;
    }
`)

const Title: FC<TitleProps> = (props) => {
  const { children, className } = props
  return (
    <StyledTitle className={className}>{children}</StyledTitle>
  )
}

export default memo(Title)
