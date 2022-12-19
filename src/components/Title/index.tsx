import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    display: inline-block;
    margin: 10px 0;
`

export default function Title ({ children }: { children?: React.ReactNode }) {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}
