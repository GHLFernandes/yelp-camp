import type { FC } from 'react'
import React, { createContext, useContext } from 'react'
import type { User } from 'firebase/auth'
import { confirmPasswordReset, verifyPasswordResetCode, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updatePassword } from 'firebase/auth'
import { auth } from '../../../config/firebase'

interface UserAuthContextProviderProps {
  children: JSX.Element
  loggedIn: boolean
}

const UserAuthContext = createContext({})

export const UserAuthContextProvider: FC<UserAuthContextProviderProps> = (props) => {
  const { children, loggedIn } = props

  const signUp = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = async (): Promise<void> => {
    await signOut(auth)
  }

  const googleSignIn = async (): Promise<void> => {
    const googleAuthProvider = new GoogleAuthProvider()

    await signInWithPopup(auth, googleAuthProvider)
  }

  const changePass = async (user: User, password: string): Promise<void> => {
    await updatePassword(user, password)
  }

  const resetPassRequest = async (email: string): Promise<void> => {
    await sendPasswordResetEmail(auth, email)
  }

  const verifyPasswordResetLink = async (obbCode: string): Promise<void> => {
    await verifyPasswordResetCode(auth, obbCode)
  }

  const confirmPassReset = async (obbCode: string, pass: string): Promise<void> => {
    await confirmPasswordReset(auth, obbCode, pass)
  }

  return (
    <UserAuthContext.Provider value={{ signUp, signIn, signOutUser, googleSignIn, changePass, loggedIn, resetPassRequest, verifyPasswordResetLink, confirmPassReset }} >
      { children }
    </UserAuthContext.Provider>
  )
}

export const useUserAuth = (): any => {
  return useContext(UserAuthContext)
}
