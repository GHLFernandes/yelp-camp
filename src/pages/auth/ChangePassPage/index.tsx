import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'
import Title from '../../../components/Title'
import ChangePassForm from './components/ChangePassForm'

const Main = memo(styled.div`
    display: grid;
    row-gap: 40px;


    @media (min-width: 720px) {
        margin: 0 auto;
    }
  
    @media (min-width: 1020px) {
        display: block;
      }
`)

const ChangePassContainer = memo(styled.div`
    @media (min-width: 720px) {

    }

    @media (min-width: 1020px) {
        display: block;

    }
`)

const FormContainer = memo(styled.div`
    grid-area: form;
    padding: 20px 20px;
    row-gap: 0px;
    margin-top: 70px;
    margin-bottom: 20px;

    @media (min-width: 720px) {
        padding: 20px 8%;
    }

    @media (min-width: 1020px) {
        width: 100%;
        padding: 0;
        z-index:2;
      }
`)

const ChangePassPage: FC = () => {
  return (
    <Main>
      <ChangePassContainer>
        <FormContainer>
          <Title>Change your password</Title>
          <ChangePassForm />
        </FormContainer>
      </ChangePassContainer>
    </Main>
  )
}

export default memo(ChangePassPage)
