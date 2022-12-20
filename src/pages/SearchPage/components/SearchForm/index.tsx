import React, { ReactElement, memo } from 'react'
import Button from '../../../../components/Button'
import InputText from '../../../../components/InputText'
import styled from 'styled-components'

const StyledSearchForm = memo(styled.form`
  display: block;

`)

const SearchForm = (): ReactElement => {
  return (
    <StyledSearchForm>
      <InputText/>
      <Button className='searchBtn'>Search</Button>
    </StyledSearchForm>
  )
}

export default memo(SearchForm)
