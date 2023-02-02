import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'
import Title from '../../../components/Title'
import ProfileForm from './components/ProfileForm'
// import { Link } from 'react-router-dom'

const Main = memo(styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  height: 100vh;    
  justify-content: center;

  @media (min-width: 720px) {
    margin: 0 auto;
    display: grid;
  }

  @media (min-width: 1020px) {
    margin: 0;
    

  }
`)

const ProfileContainer = memo(styled.div`
  
  @media (min-width: 720px) {
      
  }

  @media (min-width: 1020px) {
    display: grid;

    div{
    }
  }
`)

const ProfilePage: FC = () => {
  return (
    <Main>
      <ProfileContainer>
        <div>
          <Title className='title-forms'>Edit your infos.</Title>
          <ProfileForm />
        </div>
      </ProfileContainer>
    </Main>
  )
}

export default memo(ProfilePage)
