import React, { ReactElement, memo, useState } from 'react'
import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import styled from 'styled-components'
import { auth } from '../../../../firebase.js'
import { User, signInWithEmailAndPassword } from 'firebase/auth'

const StyledSignInForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const SignInForm = (): ReactElement => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [user, setUser] = useState<User>()

  const handleSubmit = async (e: { preventDefault: () => void }): Promise<any> => {
    e.preventDefault()
    try {
      const createUser = await signInWithEmailAndPassword(auth, email, pass)
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <StyledSignInForm onSubmit={async (e: any) => await handleSubmit(e)}>
      <TextInput
        placeholder='johndoe_91'
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

      <Button type='submit' className='full-width loginBtn'>Login</Button>
    </StyledSignInForm>
  )
}

export default memo(SignInForm)
