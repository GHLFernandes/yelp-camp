import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'

const StyledDesc = memo(styled.p`
    display: inline-block;
    color: #727272;
    font-size: 18px;
    line-height: 28px;
    margin: 5px 0;
`)

const Description = ({ children }: { children?: React.ReactNode }): ReactElement => {
  return (
    <StyledDesc>{children}</StyledDesc>
  )
}

export default memo(Description)
