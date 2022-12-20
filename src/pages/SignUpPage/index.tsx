import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import SignUpForm from './components/SignUpForm'
import { Link } from 'react-router-dom'
import Testimony from '../../components/Testimony'
import Logo from '../../components/Logo'

const Main = memo(styled.div`
    display: grid;
    row-gap: 40px;


    @media (min-width: 720px) {
        margin: 0 auto;
    }
  
    @media (min-width: 1020px) {
        grid-template-rows: 1fr;
      }
`)

const SignUpContainer = memo(styled.div`

    .logo{
        position: absolute;
        top: 30px;
        padding: 0 20px;
    }

    @media (min-width: 720px) {
        .logo{
            position: relative;
            padding: 0 8%;
            top: 40px;
          }
    }

    @media (min-width: 1020px) {
        grid-template-rows: 1fr;
        grid-template-columns: repeat(12, 1fr);
        display: grid;

        .logo{
            display: grid;
            padding: 40px 16%;
            grid-column: 2 / span 3;
            grid-row: 1 / span 2;
            top: 0px;
          }
    }
`)

const FormContainer = memo(styled.div`
    grid-area: form;
    padding: 20px 20px;
    row-gap: 0px;
    margin-top: 70px;
    margin-bottom: 20px;

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

    @media (min-width: 1020px) {
        display: grid;
        grid-column: 2 / span 5;
        grid-row: 1 / span 2;
        width: 100%;
        padding: 60px 12%;
    
      }
`)

const TestimonialsContainer = memo(styled.div`
    display: block;

    @media (min-width: 1020px) {
        grid-area: testimonials;
        display: grid;
        grid-column: 9 / span 12;
        grid-row: 1 / span 2;
        width: 100%;
        height: 100vh;
      }
`)

const SignUpPage = (): ReactElement => {
  return (
    <Main>
      <SignUpContainer>
        <div className='logo'>
          <Logo />
        </div>
        <FormContainer>
          <Title>Start exploring camps from all around the world.</Title>
          <SignUpForm />
          <p className='sign-up'>Already a user? <Link className='sign-up-link' to='sign-in'>Sign in</Link></p>
        </FormContainer>
        <TestimonialsContainer>
          <Testimony />
        </TestimonialsContainer>
      </SignUpContainer>
    </Main>
  )
}

export default memo(SignUpPage)
