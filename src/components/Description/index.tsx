import React from 'react'
import styled from 'styled-components'

const StyledDesc = styled.p`
    display: inline-block;
    color: #727272;
    font-size: 18px;
    line-height: 28px;
    margin: 10px 0;
`

export default function Description ({ children }: { children?: React.ReactNode }) {
  return (
    <StyledDesc>{children}</StyledDesc>
  )
}
