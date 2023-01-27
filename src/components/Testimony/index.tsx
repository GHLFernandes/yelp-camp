import React, { memo } from 'react'
import styled from 'styled-components'

import { ReactComponent as UserTestimonialPhoto } from './img/User Testimonial.svg'

const StyledTestimony = memo(styled.div`
    background-color: #f7f7f7;
    padding: 10px 20px;

    @media (min-width: 720px) {
        padding: 40px 8%;
    }

    @media (min-width: 1020px) {
        display: block;
        padding: 30vh 22% 0 22%;
      }
`)

const QuoteTestimony = memo(styled.h3`
    line-height: 1.8;
    font-size: 21px;

`)

const UserTestimonial = memo(styled.div`
    display: flex;
    padding-bottom: 20px;

`)

const UserInfo = memo(styled.div`
    display: inline-block;
    margin-left: 15px;

    span{
        display: block;
        font-size: 14px;
        line-height: 1.5;
    }

    span:first-child{
        font-weight: 600;
    }

    span:last-child{
        color: #818181;
    }
`)

const Testimony: React.FunctionComponent = props => {
  return (
    <StyledTestimony>
      <QuoteTestimony>&quot;YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.&quot;</QuoteTestimony>
      <UserTestimonial>
        <UserTestimonialPhoto />
        <UserInfo>
          <span>May Andrews</span>
          <span>Professional Hiker</span>
        </UserInfo>
      </UserTestimonial>

    </StyledTestimony>
  )
}

export default memo(Testimony)
