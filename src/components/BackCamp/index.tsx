import React, { ReactElement, memo } from 'react'
import { Link } from 'react-router-dom'

const BackCamp = (): ReactElement => {
  return (
    <Link to='/camps'>
      <p><span>&#8592;</span>Back to Campgrounds</p>
    </Link>
  )
}

export default memo(BackCamp)
