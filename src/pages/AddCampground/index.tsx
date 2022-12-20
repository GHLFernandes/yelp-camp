import React, { ReactElement, memo, useState } from 'react'
import { Box, FormControl } from '@mui/material'
import styled from 'styled-components'
import Title from '../../components/Title'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import TextArea from '../../components/TextArea'

const inicialFormValues = {
  id: 0,
  campgroundName: '',
  price: '',
  image: ''
}

const StyledAddCampground = memo(styled.div`
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

const AddCampground = (): ReactElement => {
  const [values, setValues] = useState(inicialFormValues)

  return (
    <StyledAddCampground>
      <Main>
        <Title>Add New Campground</Title>
        <Form>
          <TextInput type='text' label='Campground Name' id='campground-name' placeholder='Seven Sisters Waterfall'/>
          <TextInput type='number' label='Price' id='price' placeholder='$149'/>
          <TextInput type='text' label='Image' id='img' placeholder='https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
          <TextArea size={5} label='Description' id='desc' placeholder='The Seven Sister is the 39th tallest waterfall in Norway. The 410-meter tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 meters. The waterfall is lcated along the Geirangerfjorden in Stranda Municipality in More og Romsdal county, Norway.'/>
          <Button type='submit' className='full-width addCampgroundBtn'>Add Campground</Button>
        </Form>
      </Main>
    </StyledAddCampground>
  )
}

export default memo(AddCampground)
