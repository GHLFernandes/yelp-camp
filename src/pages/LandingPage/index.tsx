import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import Description from '../../components/Description'
import Partenered from './components/Partenered'
import Button from '../../components/Button'
import img from './img/HeroImage.jpg'
import imgMobile from './img/HeroImageTabletMobile.jpg'
import Checkmark from './img/Checkmark.svg'
import { Link } from 'react-router-dom'

const StyledLandingPage = memo(styled.div`
  @media (min-width: 720px) {
    
  }

  @media (min-width: 1020px) {
    grid-template-rows: auto 1fr;
  }
`)

const ContainerLP = memo(styled.div`

  @media (min-width: 720px) {
  }

  @media (min-width: 1020px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(12, 1fr);
    display: grid;
    align-items: center;
  }
`)

const InfoCamp = memo(styled.div`  
  grid-area: info;
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

  .logo{
    position: absolute;
    top: 20px;
  }

  @media (min-width: 720px) {
    padding: 0 10%;
  }

  @media (min-width: 1020px) {
    display: grid;
    grid-column: 2 / span 5;
    width: 100%;

    .logo{
      position: relative;
      top: 20px;
    }
  }
`)

const ImgCamp = memo(styled.div`
  grid-area: img;
  background-image: url(${imgMobile});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  width: 100%;
  height: 30vh;
  margin-bottom: 10px;
  margin-top: 70px;

  @media (min-width: 720px) {
    height: 50vh;
  }

  @media (min-width: 1020px) {
    grid-column: 5 / span 12;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    width: 100%;
    height: 100vh;
    margin: 0;
  }
`)

const Ul = memo(styled.ul`
  list-style: none;
  color: #727272;
  font-size: 18px;
  line-height: 28px;
  padding: 0;
`)

const LandingPage: FC = () => {
  return (
    <StyledLandingPage>
      <ContainerLP >
        <ImgCamp />
        <InfoCamp>
          <div>
            <Title>Explore the best camps on Earth.</Title>
            <Description>YelpCamp is a curated list od the best camping spots on Earth. Unfiltered and unbiased reviews.</Description>
            <Ul>
              <li>Add your own camp suggestions.</li>
              <li>Leave reviews and experiences.</li>
              <li>See locations for all camps.</li>
            </Ul>
            <Link to='/camps'>
              <Button type='button' className=''>View Campgrounds</Button>
            </Link>
            <Partenered />
          </div>
        </InfoCamp>
      </ContainerLP>
    </StyledLandingPage>
  )
}

export default memo(LandingPage)
