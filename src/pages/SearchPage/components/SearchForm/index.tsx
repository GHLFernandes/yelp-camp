import React, { ReactElement, memo } from 'react'
import Button from '../../../../components/Button'
import InputSearch from '../InputSearch'
import styled from 'styled-components'

const StyledSearchForm = memo(styled.form`
  display: block;

  @media (min-width: 1020px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 20px;

    .inpuSearch{
      grid-column: 1 / span 7;
      margin-bottom: 25px;
    }

    .searchBtn{
      display: grid;
      grid-column: 8 / span 4;
      margin-bottom: 24.4px;
      margin-top: 15px;
    }
  }
`)

const SearchForm = (): ReactElement => {
  return (
    <StyledSearchForm>
      <InputSearch className='inpuSearch' placeholder='Search for camps'/>
      <Button type='button' className='full-width searchBtn'>Search</Button>
    </StyledSearchForm>
  )
}

export default memo(SearchForm)
