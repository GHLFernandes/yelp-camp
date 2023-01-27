import React, { FunctionComponent, memo, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = (props) => {
  const { children } = props
  const user = localStorage.getItem('user')

  if (user == null || user === '') {
    console.log('No user detected, redirecting')
    return <Navigate to="/sign-in" />
  }

  return children
}

export default memo(ProtectedRoute)
