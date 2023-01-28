import React, { FunctionComponent, memo, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../../common/contexts/UserAuthContext'

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = (props) => {
  const { currentUser } = useUserAuth()
  const { children } = props

  if (!currentUser) {
    return <Navigate to="/sign-in" />
  }

  return children
}

export default memo(ProtectedRoute)
