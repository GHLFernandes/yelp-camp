import type { FC } from 'react'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledBackCamp = styled.div`
  @media (max-width: 720px){
    font-size: 16px;
    margin-top: 12px;
  }  
`

const BackCamp: FC = () => {
  return (
    <StyledBackCamp>
      <Link to='/camps'>
        <span>&#8592;</span>Back to Campgrounds
      </Link>
    </StyledBackCamp>
  )
}

export default memo(BackCamp)
