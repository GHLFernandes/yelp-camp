import type { FC } from 'react'
import React, { memo, useState } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import TextArea from '../../components/TextArea'
// import { useNavigate } from 'react-router-dom'

const StyledAddCampground = memo(styled.div`
  align-items: center;
  display: grid;
  height: 100vh;    
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

const AddCampground: FC = () => {
  const uniqueId = uuid()
  const [id] = useState(uniqueId)
  const [campgroundName, setCampgroundName] = useState('')
  const [price, setPrice] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')
  // const navigate = useNavigate()

  const handleSubmit = async (e: { preventDefault: () => void }): Promise<any> => {
    e.preventDefault()
    // const campsColRef = collection(db, 'camps')

    // await addDoc(campsColRef, {id, campgroundName, price, img, desc})
    //   .then(res => {
    //     console.log('Dado inserido')
    //     navigate('/camps')

    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  return (
    <StyledAddCampground>
      <Main>
        <Title>Add New Campground</Title>
        <Form onSubmit={async (e: React.FormEvent<HTMLInputElement>) => await handleSubmit(e)}>
          <input
            type='text'
            hidden
            readOnly
            id='uuidv4'
            value={id}
          />
          <TextInput
            type='text'
            label='Campground Name'
            id='campground-name'
            placeholder='Seven Sisters Waterfall'
            value={campgroundName}
            onChange={(e) => { setCampgroundName(e.target.value) }}
          />
          <TextInput
            type='number'
            label='Price'
            id='price'
            placeholder='$149'
            value={price}
            onChange={(e) => { setPrice(e.target.value) }}
          />
          <TextInput
            type='text'
            label='Image'
            id='img'
            placeholder='https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            value={img}
            onChange={(e) => { setImg(e.target.value) }}
          />
          <TextArea
            size={5}
            label='Description'
            id='desc'
            placeholder='The Seven Sister is the 39th tallest waterfall in Norway. The 410-meter tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 meters. The waterfall is lcated along the Geirangerfjorden in Stranda Municipality in More og Romsdal county, Norway.'
            value={desc}
            onChange={(e) => { setDesc(e.target.value) }}
          />
          <Button type='submit' className='full-width addCampgroundBtn'>Add Campground</Button>
        </Form>
      </Main>
    </StyledAddCampground>
  )
}

export default memo(AddCampground)
