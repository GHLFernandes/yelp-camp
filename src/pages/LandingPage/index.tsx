import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Description from '../../components/Description'
import Partenered from './components/Partenered'
import Button from '../../components/Button'
import img from './img/HeroImage.jpg'
import imgMobile from './img/HeroImageTabletMobile.jpg'
import Checkmark from './img/Checkmark.svg'

const StyledLandingPage = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;


  @media (min-width: 720px) {
  }

  @media (min-width: 1020px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const ContainerLP = styled.div`
  display: grid;

  @media (min-width: 720px) {
  }

  @media (min-width: 1020px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const InfoCamp = styled.div`  
  padding: 20px 20px 0 20px;

  ul li::before {
    content: '';
    background-image: url('${Checkmark}');
    background-repeat: no-repeat;
    background-position: bottom;
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 10px;
  }

  @media (min-width: 720px) {
  }

  @media (min-width: 1020px) {
      grid-column: 1 / span 7;

  }
`

const ImgCamp = styled.div`
  display: block;
  background-image: url(${imgMobile});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  width: 100%;
  height: 30vh;
  margin-bottom: 10px;

  @media (min-width: 1020px) {
    grid-column: 8 / span 12;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    width: 100%;
    height: 100vh;
  }
`

const Ul = styled.ul`
  list-style: none;
  color: #727272;
  font-size: 18px;
  line-height: 28px;
`

export default function LandingPage () {
  return (
    <StyledLandingPage>
      <Header />
      <ContainerLP >
        <ImgCamp />
        <InfoCamp>
          <Title>Explore the best camps on Earth.</Title>
          <Description>YelpCamp is a curated list od the best camping spots on Earth. Unfiltered and unbiased reviews.</Description>
          <Ul>
            <li>Add your own camp suggestions.</li>
            <li>Leave reviews and experiences.</li>
            <li>See locations for all camps.</li>
          </Ul>
          <Button>View Campgrounds</Button>
        </InfoCamp>
        <Partenered />
      </ContainerLP>
    </StyledLandingPage>
  )
}
