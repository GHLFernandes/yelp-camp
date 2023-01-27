import React, { FunctionComponent, memo } from 'react'
import styled from 'styled-components'

interface DescriptionProps {
  children?: React.ReactNode
}

const StyledDesc = memo(styled.p`
    display: inline-block;
    color: #727272;
    font-size: 18px;
    line-height: 28px;
    margin: 5px 0;
`)

const Description: FunctionComponent<DescriptionProps> = (props) => {
  const { children } = props
  return (
    <StyledDesc>{children}</StyledDesc>
  )
}

export default memo(Description)
