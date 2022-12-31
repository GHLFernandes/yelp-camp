import React, { ReactElement, memo } from 'react'
import { useUserAuth } from '../../common/contexts/UserAuthContext'
import { Navigate } from 'react-router-dom'

interface Props {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: Props): ReactElement => {
  const { user } = useUserAuth()

  console.log(user)

  if (user === null || user === undefined) {
    return <Navigate to="/sign-in" />
  }

  return children
}

export default memo(ProtectedRoute)
