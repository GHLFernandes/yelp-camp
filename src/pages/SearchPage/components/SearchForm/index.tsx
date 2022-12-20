import React, { ReactElement, memo } from 'react'
import Button from '../../../../components/Button'
import InputSearch from '../InputSearch'
import styled from 'styled-components'

const StyledSearchForm = memo(styled.form`
  display: block;

`)

const SearchForm = (): ReactElement => {
  return (
    <StyledSearchForm>
      <InputSearch placeholder='Search for camps'/>
      <Button type='button' className='full-width searchBtn'>Search</Button>
    </StyledSearchForm>
  )
}

export default memo(SearchForm)
