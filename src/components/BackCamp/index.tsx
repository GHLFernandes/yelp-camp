import type { FC } from 'react'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const BackCamp: FC = () => {
  return (
    <Link to='/camps'>
      <p><span>&#8592;</span>Back to Campgrounds</p>
    </Link>
  )
}

export default memo(BackCamp)
