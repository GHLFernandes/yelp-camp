import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'
import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../../firebase.js'

interface Props {
  children: JSX.Element
}

const userAuthContext = createContext({})

export const UserAuthContextProvider = ({ children }: Props): ReactElement => {
  const [user, setUser] = useState<User | null>()

  const signUp = async (email: string, password: string): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = async (email: string, password: string): Promise<UserCredential> => {
    console.log(email, password)
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = async (): Promise<void> => {
    return await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <userAuthContext.Provider value={{ user, signUp, signIn, signOutUser }}>
      {children}
    </userAuthContext.Provider>

  )
}

export const useUserAuth = (): any => {
  return useContext(userAuthContext)
}
