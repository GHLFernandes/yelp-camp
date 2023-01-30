import type { FC } from 'react'
import React, { memo, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../../components/Button'
import TextInput from '../../../../../components/TextInput'
import styled from 'styled-components'
import { useUserAuth } from '../../../../../common/contexts/UserAuthContext'
import { auth } from '../../../../../config/firebase'
import ErroText from '../../../../../components/ErroText'

const StyledChangePassForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const ChangePassForm: FC = () => {
  const { changePass, erro, setErro } = useUserAuth()
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [changing, setChanging] = useState(false)

  const navigate = useNavigate()
  const user = auth.currentUser

  useEffect(() => {
    setErro('')
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (newPass !== confirm) {
      setErro('Make sure your passwords are maching')
      throw new Error('Deu ruim')
    }

    if (erro !== '') setErro('')

    setChanging(true)

    await changePass(user, newPass)
      .then(() => {
        console.log('Pass Changed!')
      })
      .catch((error: { message: string }) => {
        setChanging(false)
        setErro(error.message)
      })

    if (!changing) {
      navigate('/')
    }
  }

  return (
    <StyledChangePassForm onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { await handleSubmit(e) }}>
      <TextInput
        placeholder='Old Password'
        id='old-password'
        label='Old Password'
        type='password'
        value={oldPass}
        onChange={(e) => { setOldPass(e.target.value) }}
      />
      <TextInput
        placeholder='Choose Password'
        id='password'
        label='Password'
        type='password'
        value={newPass}
        onChange={(e) => { setNewPass(e.target.value) }}
      />
      <TextInput
        placeholder='Confirm Password'
        id='confirm-password'
        label='Confirm Password'
        type='password'
        value={confirm}
        onChange={(e) => { setConfirm(e.target.value) }}
      />
      <ErroText erro={erro}/>
      <Button type='submit' className='full-width createAccountBtn' disabled={changing}>Change Password</Button>
    </StyledChangePassForm>
  )
}

export default memo(ChangePassForm)
