import React, { FunctionComponent, memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import styled from 'styled-components'
import { useUserAuth } from '../../../../common/contexts/UserAuthContext'

const StyledSignUpForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const SignUpForm: FunctionComponent = (props) => {
  const { signUp, erro, setErro } = useUserAuth()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [registering, setRegistering] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      await signUp(email, pass)
      navigate('/camps')
    } catch (error: unknown) {
      console.log(error)
    }

    if (erro.code === 'auth/weak-password') {
      setErro('Please enter a stronger password.')
      return
    } else if (erro.code === 'auth/email-already-in-use') {
      setErro('Email already in use.')
      return
    } else {
      setErro('Unable to register. Please try again later.')
    }

    if (erro !== '') setErro('')

    setRegistering(true)

    await signUp(email, pass)
      .then(() => {
        navigate('/')
      })
      .catch((error: { code: string | string[] }) => {
        console.log(error)
      })
  }

  return (
    <StyledSignUpForm onSubmit={ async (e: any) => await handleSubmit(e)}>
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
      <TextInput
        placeholder='Confirm Password'
        id='confirm-password'
        label='Confirm Password'
        type='password'
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Button type='submit' className='full-width createAccountBtn' disabled={registering}>Create an account</Button>
    </StyledSignUpForm>
  )
}

export default memo(SignUpForm)
