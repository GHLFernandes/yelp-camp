import React, { memo, useState, FunctionComponent } from 'react'
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

const SignInForm: FunctionComponent = () => {
  const { signIn, googleSignIn, erro, setErro } = useUserAuth()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [authenticating, setAuthenticating] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (erro !== '') setErro('')

    if (erro.code === 'auth/network-request-failed') {
      setErro('Password wrong! Please try again with valid credential.')
      return
    } else if (erro.code === 'auth/email-already-in-use') {
      setErro('Email already in use.')
      return
    } else if (erro.code === 'auth/invalid-email' || erro.code === 'auth/user-not-found)') {
      setErro('Invalid e-mail. Please try again with valid credentials.')
      return
    }

    setAuthenticating(true)

    await signIn(email, pass)
      .then((result: any) => {
        navigate('/')
        console.log(result)
      })
      .catch((error: { message: string, code: string }) => {
        console.log(error)
        setAuthenticating(false)
        setErro(error.message)
      })
  }

  const handleGoogleSignIn = async (): Promise<void> => {
    if (erro !== '') setErro('')

    setAuthenticating(true)

    await googleSignIn()
      .then((result: any) => {
        console.log(result)
        navigate('/')
      })
      .catch((error: { message: any }) => {
        console.log(error)
        setAuthenticating(false)
        setErro(error.message)
      })
  }

  return (
    <>
      <StyledSignInForm onSubmit={ async (e: any) => await handleSubmit(e) }>
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
        <Button type='submit' className='full-width loginBtn' disabled={authenticating}>Login</Button>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <GoogleButton className='g-btn' type='dark' onClick={ async () => await handleGoogleSignIn() }/>
      </StyledSignInForm>
    </>
  )
}

export default memo(SignInForm)
