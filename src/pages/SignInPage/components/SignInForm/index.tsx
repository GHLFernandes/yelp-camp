import React, { ReactElement, memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import styled from 'styled-components'
import { useUserAuth } from '../../../../common/contexts/UserAuthContext'
import GoogleButton from 'react-google-button'

const StyledSignInForm = memo(styled.form`
  padding-top: 20px;
  display: block;

  .g-btn{
    width: 100% !important;
  }
`)

const SignInForm = (): ReactElement => {
  const { signIn, googleSignIn } = useUserAuth()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: { preventDefault: () => void }): Promise<any> => {
    e.preventDefault()
    try {
      await signIn(email, pass)
      navigate('/home')
    } catch (error: unknown) {
      console.log(error)
    }
  }

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      await googleSignIn()
      navigate('/home')
    } catch (error: unknown) {
      console.log(error)
    }
  }
  return (
    <>
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
        <Button type='submit' className='full-width loginBtn'>Login</Button>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <GoogleButton className='g-btn' type='dark' onClick={ async () => await handleGoogleSignIn() }/>
      </StyledSignInForm>
    </>
  )
}

export default memo(SignInForm)
