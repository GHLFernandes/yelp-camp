import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../../firebase.js'

interface Props {
  children: JSX.Element
}

const userAuthContext = createContext({})

export const UserAuthContextProvider = ({ children }: Props): ReactElement => {
  const [user, setUser] = useState<User | null>()
  const [currentUser, setCurrentUser] = useState({});

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

  const googleSignIn = async (): Promise<UserCredential> => {
    const googleAuthProvider = new GoogleAuthProvider()

    return await signInWithPopup(auth, googleAuthProvider)
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    if (user) {
        setCurrentUser({ email: user.email, uid: user.uid })
      }
    return () => {
      unsubscribe()
    }
  }, [currentUser])

  return (
    <userAuthContext.Provider value={{ user, currentUser, signUp, signIn, signOutUser, googleSignIn }}>
      {children}
    </userAuthContext.Provider>

  )
}

export const useUserAuth = (): any => {
  return useContext(userAuthContext)
}
