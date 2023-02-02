/* eslint-disable no-useless-return */
import type { FC } from 'react'
import React, { useEffect, useState, memo } from 'react'
// import { Link } from 'react-router-dom'
import Button from '../../../../../components/Button'
import TextInput from '../../../../../components/TextInput'
import styled from 'styled-components'
import ErroText from '../../../../../components/ErroText'

const StyledProfileForm = memo(styled.form`
  display: block;
  padding-top: 20px;

  .g-btn{
    width: 100% !important;
  }

  .user-profile-photo{
    text-align: center;
    margin-bottom: 20px;
  }
`)

interface IUserInfo {
  displayName: string
  email: string
  phoneNumber: string
  photoURL: string
}

const ProfileForm: FC = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [erro] = useState('')
  const [authenticating] = useState(false)
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const user = localStorage.getItem('user')

      setUserInfo(JSON.parse(user ?? '')?.providerData[0])
      console.log(userInfo)
    } else {
      console.log('Not a registered user')
    }
  }, [])

  return (
    <div className="container">
      {/* <StyledProfileForm onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { await handleSubmit(e) }}> */}
      <StyledProfileForm >
        <div className='user-profile-photo'>
          {(userInfo) &&
            <img src={(userInfo?.photoURL !== null && userInfo.photoURL !== '') ? userInfo?.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqOkeOMcWfV70RX4UGcoyx3NjceMhLcDA6CG8-rbn2Im07JvMXBI0Xkh1YXNRIEri-0w&usqp=CAU'} alt="mdo" width="130" height="130" className="rounded-circle"/>
          }
        </div>
        <div className="row">
          <div className="col-sm">
            <TextInput
              placeholder='johndoe_91'
              id='user-name'
              label='Username'
              type='text'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}

            />
            <TextInput
              placeholder='johndoe_91'
              id='email'
              label='E-mail'
              type='text'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}

            />
          </div>
          <div className="col-sm">
            <TextInput
              placeholder='+55 (99) 99999-9999 '
              id='phoneNumber'
              label='Phone'
              type='tel'
              value={pass}
              onChange={(e) => { setPass(e.target.value) }}
            />
            <TextInput
              placeholder='+55 (99) 99999-9999 '
              id='phoneNumber'
              label='Phone'
              type='tel'
              value={pass}
              onChange={(e) => { setPass(e.target.value) }}
            />

          </div>
        </div>
        <ErroText erro={erro}/>
        <Button type='submit' className='full-width loginBtn' disabled={authenticating}>
          {(authenticating) && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
          Save
        </Button>
      </StyledProfileForm>
    </div>
  )
}

export default memo(ProfileForm)
