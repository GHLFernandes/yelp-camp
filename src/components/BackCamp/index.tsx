import React, { ReactElement, memo } from 'react'
import { Link } from 'react-router-dom'

const BackCamp = (): ReactElement => {
  return (
    <Link to='/home'>
      <p><span>&#8592;</span>Back to Campgrounds</p>
    </Link>
  )
}

export default memo(BackCamp)
