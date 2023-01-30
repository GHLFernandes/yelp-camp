import type { FC } from 'react'
import React, { memo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../../components/Button'
import TextInput from '../../../../../components/TextInput'
import styled from 'styled-components'
import { useUserAuth } from '../../../../../common/contexts/UserAuthContext'
import ErroText from '../../../../../components/ErroText'

const StyledSignUpForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const SignUpForm: FC = () => {
  const { signUp, erro, setErro } = useUserAuth()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [registering, setRegistering] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setErro('')
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (erro !== '') setErro('')

    if (confirm !== pass) {
      setErro('Passwords does not match!')
      setRegistering(false)
      return
    }

    setRegistering(true)

    await signUp(email, pass)
      .then(() => {
        navigate('/')
      })
      .catch((error: { message: string }) => {
        console.log(error)
        setRegistering(false)
        setErro(error.message)
      })

    if (!registering) {
      navigate('/')
    }
  }

  return (
    <StyledSignUpForm onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { await handleSubmit(e) }}>
      <TextInput
        placeholder='johndoe_91@example.com'
        id='email'
        label='E-mail'
        type='text'
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <TextInput
        placeholder='Choose Password'
        id='password'
        label='Password'
        type='password'
        value={pass}
        onChange={(e) => { setPass(e.target.value) }}
      />
      <TextInput
        placeholder='Confirm Password'
        id='confirm-password'
        label='Confirm Password'
        type='password'
        value={confirm}
        onChange={(e) => { setConfirm(e.target.value) }}
      />
      <ErroText erro={erro}/>
      <Button type='submit' className='full-width createAccountBtn' disabled={registering}>Create an account</Button>
    </StyledSignUpForm>
  )
}

export default memo(SignUpForm)
