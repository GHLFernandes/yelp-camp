import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'

const StyledTitle = memo(styled.h1`
    display: inline-block;
    margin: 10px 0;

    @media (min-width: 1020px) {
      font-size: 36px;
  }
`)

interface TitleProps {
  children?: React.ReactNode
}

const Title: FC<TitleProps> = (props) => {
  const { children } = props
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}

export default memo(Title)
