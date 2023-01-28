import React, { FC, createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updatePassword, User } from 'firebase/auth'
import { auth } from '../../../firebase.js'

interface UserAuthContextProviderProps {
  children: JSX.Element
  loggedIn: boolean
}

const UserAuthContext = createContext({})

export const UserAuthContextProvider: FC<UserAuthContextProviderProps> = (props) => {
  const [erro, setErro] = useState('')
  const { children, loggedIn } = props

  const signUp = async (email: string, password: string): Promise<any> => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed up
      })
      .catch((error: { message: string, code: string }) => {
        setErro(error.code)
      })
  }

  const signIn = async (email: string, password: string): Promise<any> => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('Sign in')
      })
      .catch((error: { message: string, code: string }) => {
        setErro(error.message)
      })
  }

  const signOutUser = async (): Promise<void> => {
    return await signOut(auth)
      .then(() => {
        console.log('Sign out')
        localStorage.setItem('user', '')
      })
      .catch((error: { message: string, code: string }) => {
        setErro(error.message)
      })
  }

  const googleSignIn = async (): Promise<any> => {
    const googleAuthProvider = new GoogleAuthProvider()

    return await signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
      // Signed in
      })
      .catch((error: { message: string, code: string }) => {
        setErro(error.message)
      })
  }

  const changePass = async (user: User, password: string): Promise<any> => {
    return await updatePassword(user, password)
      .then(() => {
        console.log('Pass Changed!')
      })
      .catch((error: { message: string, code: string }) => {
        setErro(error.message)
      })
  }

  return (
    <UserAuthContext.Provider value={{ signUp, signIn, signOutUser, googleSignIn, changePass, erro, setErro, loggedIn }} >
      { children }
    </UserAuthContext.Provider>
  )
}

export const useUserAuth = (): any => {
  return useContext(UserAuthContext)
}
