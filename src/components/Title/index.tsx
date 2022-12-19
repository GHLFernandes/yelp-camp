import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    display: inline-block;
    margin: 10px 0;

    @media (min-width: 1020px) {
      font-size: 40px;
  }

`

export default function Title ({ children }: { children?: React.ReactNode }) {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}
