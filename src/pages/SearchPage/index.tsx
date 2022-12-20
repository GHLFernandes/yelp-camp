import React, { ReactElement, memo } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import Description from '../../components/Description'
import SearchForm from './components/SearchForm'
import { Link } from 'react-router-dom'

const StyledSearchPage = memo(styled.div`
  display: grid;
`)

const Main = memo(styled.div`
  display: grid;
  row-gap: 40px;
  padding: 10px 20px;
`)

const MainHeader = memo(styled.div`
  padding: 40px;
  background-color: #f7f7f7;
  border-radius: 5px;

  .add-campground{
    color: #666666;
    font-size: 18px;
    line-height: 1.6;

    &:hover, :focus{
      cursos: pointer;
      color: #3f3f3f;
    }
  }


`)
const Campgrounds = memo(styled.div`

`)

const SearchPage = (): ReactElement => {
  return (
    <StyledSearchPage>
      <Main>
        <MainHeader >
          <Title>Welcome to YelpCamp!</Title>
          <Description>View our hand-picked campgrounds from all over the world, or add your own.</Description>
          <SearchForm />
          <Link className='add-campground' to=''>
            Or add your own campground
          </Link>
        </MainHeader>
        <Campgrounds>
          List of Campgrounds
        </Campgrounds>
      </Main>
    </StyledSearchPage>
  )
}

export default memo(SearchPage)
