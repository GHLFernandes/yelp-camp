import React, { memo, useState } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
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

const AddNewComment: React.FunctionComponent = props => {
  const [comment, setComment] = useState('')

  return (
    <StyledAddNewComment>
      <Main>
        <Title>Add New Comment</Title>
        <Form>
          <TextArea
            size={5}
            label='Description'
            id='comment'
            placeholder={'This was probably the best camp i\'ve visited this past year, definitely recommend visiting any time soon.'}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type='submit' className='full-width addCommentBtn'>Post Comment</Button>
        </Form>
      </Main>
    </StyledAddNewComment>
  )
}

export default memo(AddNewComment)
