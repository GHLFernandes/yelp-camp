import React, { memo } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import Description from '../../components/Description'
import SearchForm from './components/SearchForm'
import { Link } from 'react-router-dom'

const StyledSearchPage = memo(styled.div`
  display: grid;
  padding: 20px;

  @media (min-width: 1020px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(12, 1fr);
    padding: 10px 0;
}
`)

const Main = memo(styled.div`
  display: grid;
  row-gap: 40px;

  @media (min-width: 720px) {
    padding: 10px 9%;
  }

  @media (min-width: 1020px) {
      display: grid;
      grid-template-rows: 1fr;
      grid-column: 2 / span 10;
      padding: 10px 0;
  }
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

  @media (min-width: 1020px) {
    display: grid;
    padding: 50px 0;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(12, 1fr);
  }

`)

const Container = memo(styled.div`
 
  @media (min-width: 1020px) {
    display: grid;
    grid-column: 1 / span 5;
    padding: 0 15px 0 40px;
  }

`)

const Campgrounds = memo(styled.div`

`)

const SearchPage: React.FunctionComponent = props => {
  return (
    <StyledSearchPage>
      <Main>
        <MainHeader>
          <Container>
            <Title>Welcome to YelpCamp!</Title>
            <Description>View our hand-picked campgrounds from all over the world, or add your own.</Description>
            <SearchForm />
            <Link className='add-campground' to='/add-campground'>
              Or add your own campground
            </Link>
          </Container>
        </MainHeader>
        <Campgrounds>
          List of Campgrounds
        </Campgrounds>
      </Main>
    </StyledSearchPage>
  )
}

export default memo(SearchPage)
