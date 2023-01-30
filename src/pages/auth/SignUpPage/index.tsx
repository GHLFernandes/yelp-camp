import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'
import Title from '../../../components/Title'
import SignUpForm from './components/SignUpForm'
import { Link } from 'react-router-dom'
import Testimony from '../../../components/Testimony'

const Main = memo(styled.div`
    display: grid;
    row-gap: 40px;

    @media (min-width: 720px) {
        margin: 0 auto;
        align-items: center;
        display: grid;
        height: 100vh;    
    }
  
    @media (min-width: 1020px) {
        grid-template-rows: 1fr;
      }
`)

const SignUpContainer = memo(styled.div`

  @media (min-width: 720px) {
  }

  @media (min-width: 1020px) {
    grid-template-rows: 100px 1fr;
    grid-template-columns: repeat(12, 1fr);
    display: grid;
  }
`)

const FormContainer = memo(styled.div`
    grid-area: form;
    padding: 20px 20px;
    row-gap: 0px;

    .sign-in{
        padding: 0px;
        margin: 0px;
        color: #6c6c6c;
    }

    .sign-in-link{
        color: #009aca;
        font-weight: 600

    }

    .sign-in-link:hover, .sign-in-link:focus{
        color: #006484;
    }

    @media (min-width: 720px) {
        padding: 20px 8%;
    }

    @media (min-width: 1020px) {
        display: grid;
        grid-column: 2 / span 6;
        grid-row: 2;
        align-content: center;
        width: 100%;
        justify-content: center;
        z-index:2;
      }
`)

const TestimonialsContainer = memo(styled.div`
    display: block;

    @media (min-width: 1020px) {
      align-content: center;
      grid-area: testimonials;
      display: grid;
      grid-column: 9 / span 12;
      grid-row: 1 / span 2;
      width: 100%;
      height: 100vh;
      background-color: #f7f7f7;
    }
`)

const SignUpPage: FC = () => {
  return (
    <Main>
      <SignUpContainer>
        <FormContainer>
          <Title className='title-forms'>Start exploring camps from all around the world.</Title>
          <SignUpForm />
          <p className='sign-in'>Already a user? <Link className='sign-in-link' to='/sign-in'>Sign in</Link></p>
        </FormContainer>
        <TestimonialsContainer>
          <Testimony />
        </TestimonialsContainer>
      </SignUpContainer>
    </Main>
  )
}

export default memo(SignUpPage)
