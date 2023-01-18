import React, { ReactElement, memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import styled from 'styled-components'
import { useUserAuth } from '../../../../common/contexts/UserAuthContext'

const StyledSignUpForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const SignUpForm = (): ReactElement => {
  const { signUp, user } = useUserAuth()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): Promise<void> => {
    e.preventDefault()
    try {
      await signUp(email, pass)
      navigate('/camps')
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <StyledSignUpForm onSubmit={async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => await handleSubmit(e)}>
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
      <Button type='submit' className='full-width createAccountBtn'>Create an account</Button>
    </StyledSignUpForm>
  )
}

export default memo(SignUpForm)
