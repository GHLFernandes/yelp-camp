import type { FC } from 'react'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledBackCamp = styled.div`
  @media (min-width: 720px){
    z-index: 999;

  }  
`

const BackCamp: FC = () => {
  return (
    <StyledBackCamp>
      <Link to='/camps'>
        <p><span>&#8592;</span>Back to Campgrounds</p>
      </Link>
    </StyledBackCamp>
  )
}

export default memo(BackCamp)
