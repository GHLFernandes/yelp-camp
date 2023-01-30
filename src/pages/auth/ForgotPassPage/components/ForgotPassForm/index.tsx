import type { FC } from 'react'
import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../../components/Button'
import TextInput from '../../../../../components/TextInput'
import styled from 'styled-components'
import ErroText from '../../../../../components/ErroText'
import { useUserAuth } from '../../../../../common/contexts/UserAuthContext'

const StyledForgotPassForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const ForgotPassForm: FC = () => {
  const { erro, setErro, resetPassRequest } = useUserAuth()
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (erro !== '') { setErro('') }

    setSending(true)

    await resetPassRequest(email)
      .then(() => {
        console.log('Link sent!')
        setSent(true)
        setSending(false)
      })
      .catch((error: { message: string }) => {
        console.log(error)
        setSending(false)
        setSent(false)
        setErro(error.message)
      })

    if (sent) {
      navigate('/camps')
    }
  }

  return (
    <>
      { sent
        ? <p>A link has been sent to your email with instructions.</p>
        : <StyledForgotPassForm onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { await handleSubmit(e) }}>
          <TextInput
            placeholder='johndoe_91@example.com'
            id='email'
            label='E-mail'
            type='email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <ErroText erro={erro}/>
          <Button type='submit' className='full-width createAccountBtn' disabled={sending}>Send Reset Link</Button>
        </StyledForgotPassForm>
      }
    </>
  )
}

export default memo(ForgotPassForm)
