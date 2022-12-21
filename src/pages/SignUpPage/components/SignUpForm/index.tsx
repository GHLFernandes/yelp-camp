import React, { ReactElement, memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { database, auth } from '../../../../firebase.js'
import { ref, push, child } from 'firebase/database'
import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import styled from 'styled-components'
import { User, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const StyledSignUpForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const SignUpForm = (): ReactElement => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [user, setUser] = useState<User>()

  const navigate = useNavigate()

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      setUser(currentUser)
    }
  })

  const handleSubmit = async (e: any): Promise<any> => {
    e.preventDefault()
    try {
      const createUser = await createUserWithEmailAndPassword(auth, email, pass)
      navigate('/home')
    } catch (error: unknown) {
      console.log(error)
    }

    const obj = {
      email,
      password: pass
    }

    const newPostKey = push(child(ref(database), 'posts')).key
    const updates: any = {}
    updates['/' + newPostKey] = obj

    return updates(ref(database), updates)
  }

  return (
    <StyledSignUpForm onSubmit={async (e: any) => await handleSubmit(e)}>
      <TextInput
        placeholder='johndoe_91@example.com'
        id='email'
        label='E-mail'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        placeholder='Choose Password'
        id='password'
        label='Password'
        type='password'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      {user?.email}
      <Button type='submit' className='full-width createAccountBtn'>Create an account</Button>
    </StyledSignUpForm>
  )
}

export default memo(SignUpForm)
