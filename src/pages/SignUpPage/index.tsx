import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import SignUpForm from './components/SignUpForm'
import { Link } from 'react-router-dom'
import Testimony from '../../components/Testimony'

const Main = memo(styled.div`
    display: grid;
    row-gap: 40px;


    @media (min-width: 720px) {
        margin: 0 auto;
    }
  
    @media (min-width: 1020px) {
        width: 900px;
    }
`)

const FormContainer = memo(styled.div`
    display: grid;
    row-gap: 20px;
    padding: 10px 20px;
    .sign-up{
        padding: 0px;
        margin: 0px;
        color: #6c6c6c;
    }

    .sign-up-link{
        color: #009aca;
        font-weight: 600

    }

    .sign-up-link:hover, .sign-up-link:focus{
        color: #006484;
    }

    @media (min-width: 720px) {
        padding: 20px 8%;
    }
`)

const TestimonialsContainer = memo(styled.div`
    display: block;
    
`)

const SignUpPage = (): ReactElement => {
  return (
    <Main>
      <FormContainer>
        <Title>Start exploring camps from all around the world.</Title>
        <SignUpForm />
        <p className='sign-up'>Already a user? <Link className='sign-up-link' to='sign-in'>Sign in</Link></p>
      </FormContainer>
      <TestimonialsContainer>
        <Testimony />
      </TestimonialsContainer>
    </Main>
  )
}

export default memo(SignUpPage)
