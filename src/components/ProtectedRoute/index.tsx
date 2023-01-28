/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { FC } from 'react'
import React, { memo } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
  const { children } = props
  const user = localStorage.getItem('user')

  if (user == null || user === '') {
    console.log('No user detected, redirecting')

    return <Navigate to="/sign-in" />
  }

  return children
}

export default memo(ProtectedRoute)
