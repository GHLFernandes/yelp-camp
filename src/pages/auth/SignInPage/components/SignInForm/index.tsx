/* eslint-disable no-useless-return */
import type { FC } from 'react'
import React, { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../../../components/Button'
import TextInput from '../../../../../components/TextInput'
import styled from 'styled-components'
import { useUserAuth } from '../../../../../common/contexts/UserAuthContext'
import GoogleButton from 'react-google-button'
import ErroText from '../../../../../components/ErroText'

const StyledSignInForm = memo(styled.form`
  padding-top: 20px;
  display: block;

  .g-btn{
    width: 100% !important;
  }
`)

const SignInForm: FC = () => {
  const { signIn, googleSignIn } = useUserAuth()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [erro, setErro] = useState('')
  const [authenticating, setAuthenticating] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (erro !== '') { setErro('') }

    setAuthenticating(true)

    await signIn(email, pass)
      .then(() => {
        navigate('/camps')
      })
      .catch((error: { message: string }) => {
        setAuthenticating(false)
        setErro(error.message)
      })
  }

  const handleGoogleSignIn = async (): Promise<void> => {
    await googleSignIn()
      .then(() => {
        navigate('/camps')
      })
      .catch((error: { message: string }) => {
        console.log(error)
        setAuthenticating(false)
        setErro(error.message)
        return
      })
  }

  return (
    <>
      <StyledSignInForm onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { await handleSubmit(e) }}>
        <TextInput
          placeholder='johndoe_91'
          id='email'
          label='E-mail'
          type='text'
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}

        />
        <TextInput
          auto-complete='current-password'
          placeholder='Enter your Password'
          id='password'
          label='Password'
          type='password'
          value={pass}
          onChange={(e) => { setPass(e.target.value) }}
        />
        <p className='forget'><Link className='forget-link' to='/forgot-pass'>Forgot your Password?</Link></p>
        <ErroText erro={erro}/>
        <Button type='submit' className='full-width loginBtn' disabled={authenticating}>Login</Button>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <GoogleButton className='g-btn' type='dark' onClick={ async () => { await handleGoogleSignIn() } }/>
      </StyledSignInForm>
    </>
  )
}

export default memo(SignInForm)
