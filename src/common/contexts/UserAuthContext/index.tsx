
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../../../firebase.js'

interface UserAuthContextProviderProps {
  children: JSX.Element
}

const UserAuthContext = createContext({})

export const UserAuthContextProvider = ({ children }: Props): ReactElement => {
  const [user, setUser] = useState<User | null>()
  const [currentUser, setCurrentUser] = useState({});


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

  const googleSignIn = async (): Promise<UserCredential> => {
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
    <UserAuthContext.Provider value={{ signUp, signIn, signOutUser, googleSignIn, changePass, erro, setErro }} >
      { UserAuthContextProviderProps.children }
    </UserAuthContext.Provider>
  )
}

export const useUserAuth = (): any => {
  return useContext(UserAuthContext)
}
