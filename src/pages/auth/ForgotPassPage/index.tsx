import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'
import Title from '../../../components/Title'
import ForgotPassForm from './components/ForgotPassForm'

const Main = memo(styled.div`
  align-items: center;
  display: grid;
  height: 100vh;  
  padding: 0 20px;

  @media (min-width: 720px) {
      margin: 0 auto;
  }

  @media (min-width: 1020px) {
    }
`)

const ForgotPassContainer = memo(styled.div`
    @media (min-width: 720px) {

    }

    @media (min-width: 1020px) {
    }
`)

const FormContainer = memo(styled.div`
    grid-area: form;
    padding: 20px 20px;
    row-gap: 0px;

    @media (min-width: 720px) {
        padding: 20px 8%;
    }

    @media (min-width: 1020px) {
        width: 100%;
        padding: 0;
        z-index:2;
      }
`)

const ForgotPassPage: FC = () => {
  return (
    <Main>
      <ForgotPassContainer>
        <FormContainer>
          <Title>Send Link to E-mail</Title>
          <ForgotPassForm />
        </FormContainer>
      </ForgotPassContainer>
    </Main>
  )
}

export default memo(ForgotPassPage)
