import type { FC } from 'react'
import React, { useEffect, memo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../../../../../components/Button'
import TextInput from '../../../../../components/TextInput'
import styled from 'styled-components'
import { useUserAuth } from '../../../../../common/contexts/UserAuthContext'
import { auth } from '../../../../../config/firebase'
import ErroText from '../../../../../components/ErroText'

const StyledResetPassForm = memo(styled.form`
  padding-top: 20px;
  display: block;
`)

const ResetPassForm: FC = () => {
  const { verifyPasswordResetLink, confirmPassReset } = useUserAuth()
  const [newPass, setNewPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [changing, setChanging] = useState(false)
  const [verifying, setVerifying] = useState(true)
  const [verified, setVerified] = useState(false)
  const [oobCode, setOobCode] = useState('')
  const [erro, setErro] = useState('')

  const user = auth.currentUser
  const navigate = useNavigate()
  const [stringParams, setStringParams] = useSearchParams()

  useEffect(() => {
    console.log('extracting code')

    if (stringParams) {
      const oobCodeString = stringParams.get('oobCode')

      if (oobCodeString) {
        console.log('Code found: ' + oobCodeString)
        verifyPasswordResetLink(oobCodeString)
          .then((result: unknown) => {
            console.log(result)
            setVerifying(false)
            setVerified(true)
            setOobCode(oobCodeString)
          })
          .catch((err: { message: string }) => {
            console.log(err.message)
          })
      } else {
        console.log('Unable to find code')
        setVerified(false)
        setVerifying(false)
      }
    } else {
      console.log('Unable to find code')
      setVerified(false)
      setVerifying(false)
    }
    console.log(verifying)
    console.log(verified)

    setStringParams('')
  }, [stringParams, setStringParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (newPass !== confirm) {
      setErro('Make sure your passwords are maching')
      throw new Error('Deu ruim')
    }

    if (erro !== '') setErro('')

    setChanging(true)

    await confirmPassReset(user, oobCode, newPass)
      .then(() => {
        console.log('Pass Resetd!')
      })
      .catch((error: { message: string }) => {
        setChanging(false)
        setErro(error.message)
      })

    if (!changing) {
      navigate('/sign-in')
    }
  }

  return (
    <>
      {(verifying)
        ? <>
          <div className="spinner-border text-success m-auto my-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </>
        : <>
          {verified
            ? <StyledResetPassForm onSubmit={async (e: React.FormEvent<HTMLFormElement>) => { await handleSubmit(e) }}>
              <TextInput
                auto-complete='new-password'
                placeholder='Choose Password'
                id='password'
                label='Password'
                type='password'
                value={newPass}
                onChange={(e) => { setNewPass(e.target.value) }}
              />
              <TextInput
                auto-complete='new-password'
                placeholder='Confirm Password'
                id='confirm-password'
                label='Confirm Password'
                type='password'
                value={confirm}
                onChange={(e) => { setConfirm(e.target.value) }}
              />
              <ErroText erro={erro}/>
              <Button type='submit' className='full-width createAccountBtn' disabled={changing}>
                {(changing) && <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>}
              Reset Password
              </Button>
            </StyledResetPassForm>
            : <>
              <p>Invalid Link</p>
            </>
          }
        </>
      }
    </>
  )
}

export default memo(ResetPassForm)
