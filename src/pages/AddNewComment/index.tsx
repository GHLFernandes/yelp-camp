import React, { ReactElement, memo, useState } from 'react'
import { Box, FormControl } from '@mui/material'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import TextArea from '../../components/TextArea'

const inicialFormValues = {
  id: 0,
  comment: ''
}

const StyledAddNewComment = memo(styled.div`
    display: grid;
`)

const Main = memo(styled.div`
    display: grid;
    row-gap: 40px;
    padding: 10px 20px;

    @media (min-width: 720px) {
        width: 80%;
        margin: 0 auto;
    }
  
    @media (min-width: 1020px) {
        width: 900px;
    }
`)

const Form = memo(styled.form`

`)

const AddNewComment = (): ReactElement => {
  const [values, setValues] = useState(inicialFormValues)

  return (
    <StyledAddNewComment>
      <Main>
        <Title>Add New Comment</Title>
        <Form>
          <TextArea size={5} label='Description' id='comment' placeholder={'This was probably the best camp i\'ve visited this past year, definitely recommend visiting any time soon.'}/>
          <Button type='submit' className='full-width addCommentBtn'>Post Comment</Button>
        </Form>
      </Main>
    </StyledAddNewComment>
  )
}

export default memo(AddNewComment)
