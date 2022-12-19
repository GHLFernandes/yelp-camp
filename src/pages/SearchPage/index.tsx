import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import Description from '../../components/Description'

const StyledSearchPage = memo(styled.div`
  display: grid;
`)

const Main = memo(styled.div`
  display: grid;
  row-gap: 40px;
  padding: 10px 20px;
  height: 150vh;
`)

const MainHeader = memo(styled.div`
  padding: 25px;
  background-color: #f7f7f7;
  border-radius: 5px;
`)
const Campgrounds = memo(styled.div`

`)

const SearchPage = (): ReactElement => {
  return (
    <StyledSearchPage>
      <Main>
        <MainHeader id="main__header">
          <Title>Welcome to YelpCamp!</Title>
          <Description>View our hand-picked campgrounds from all over the world, or add your own.</Description>
        </MainHeader>
        <Campgrounds>
          List of Campgrounds
        </Campgrounds>
      </Main>
    </StyledSearchPage>
  )
}

export default memo(SearchPage)
