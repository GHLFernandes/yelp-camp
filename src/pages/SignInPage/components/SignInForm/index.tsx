import React, { ReactElement, memo } from 'react'
import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import styled from 'styled-components'

const StyledSignInForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const SignInForm = (): ReactElement => {
  return (
    <StyledSignInForm>
      <TextInput placeholder='johndoe_91' id='username' label='Username' type='text' />
      <TextInput placeholder='Choose Password' id='password' label='Password' type='password' />
      <Button type='button' className='full-width loginBtn'>Login</Button>
    </StyledSignInForm>
  )
}

export default memo(SignInForm)
