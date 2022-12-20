import React, { ReactElement, memo } from 'react'
import Button from '../../../../components/Button'
import TextInput from '../../../../components/TextInput'
import styled from 'styled-components'

const StyledSignUpForm = memo(styled.form`
  padding: 20px 0;
  display: block;

`)

const SignUpForm = (): ReactElement => {
  return (
    <StyledSignUpForm>
      <TextInput placeholder='johndoe_91' id='username' label='Username' type='text' />
      <TextInput placeholder='Choose Password' id='password' label='Password' type='password' />
      <Button type='button' className='full-width createAccountBtn'>Create an account</Button>
    </StyledSignUpForm>
  )
}

export default memo(SignUpForm)
