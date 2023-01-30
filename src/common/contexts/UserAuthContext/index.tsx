import type { FC } from 'react'
import React, { createContext, useContext, useState } from 'react'
import type { User } from 'firebase/auth'
import { sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updatePassword } from 'firebase/auth'
import { auth } from '../../../config/firebase'

interface UserAuthContextProviderProps {
  children: JSX.Element
  loggedIn: boolean
}

const UserAuthContext = createContext({})

export const UserAuthContextProvider: FC<UserAuthContextProviderProps> = (props) => {
  const [erro, setErro] = useState('')
  const { children, loggedIn } = props

  const signUp = async (email: string, password: string): Promise<any> => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed up
      })
      .catch((error: { message: string }) => {
        setErro(error.message)
      })
  }

  const signIn = async (email: string, password: string): Promise<any> => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('Sign in')
      })
      .catch((error: { message: string }) => {
        setErro(error.message)
      })
  }

  const signOutUser = async (): Promise<void> => {
    await signOut(auth)
      .then(() => {
        console.log('Sign out')
        localStorage.setItem('user', '')
      })
      .catch((error: { message: string }) => {
        setErro(error.message)
      })
  }

  const googleSignIn = async (): Promise<any> => {
    const googleAuthProvider = new GoogleAuthProvider()

    await signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
      // Signed in
      })
      .catch((error: { message: string }) => {
        setErro(error.message)
      })
  }

  const changePass = async (user: User, password: string): Promise<any> => {
    await updatePassword(user, password)
      .then(() => {
        console.log('Pass Changed!')
      })
      .catch((error: { message: string }) => {
        setErro(error.message)
      })
  }

  const resetPassRequest = async (email: string): Promise<any> => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Link sent!')
      })
      .catch((error: { message: string }) => {
        setErro(error.message)
      })
  }

  return (
    <UserAuthContext.Provider value={{ signUp, signIn, signOutUser, googleSignIn, changePass, erro, setErro, loggedIn, resetPassRequest }} >
      { children }
    </UserAuthContext.Provider>
  )
}

export const useUserAuth = (): any => {
  return useContext(UserAuthContext)
}
