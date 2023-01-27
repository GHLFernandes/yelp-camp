import React, { ReactElement, memo, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../../common/contexts/UserAuthContext'

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: Props): ReactElement => {
  const { currentUser } = useUserAuth()

  if (!currentUser) {
    return <Navigate to="/sign-in" />
  }

  return children
}

export default memo(ProtectedRoute)
