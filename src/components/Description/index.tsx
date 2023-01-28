import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'

interface DescProps {
  children?: React.ReactNode
}

const StyledDesc = memo(styled.p`
    display: inline-block;
    color: #727272;
    font-size: 18px;
    line-height: 28px;
    margin: 5px 0;
`)

interface DescProps {
  children?: React.ReactNode
}

const Description: FC<DescProps> = (props) => {
  const { children } = props
  return (
    <StyledDesc>{children}</StyledDesc>
  )
}

export default memo(Description)
