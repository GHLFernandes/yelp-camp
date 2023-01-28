import type { FC } from 'react'
import React, { memo } from 'react'
import styled from 'styled-components'

import { ReactComponent as AirBnb } from './img/Airbnb.svg'
import { ReactComponent as Booking } from './img/Booking.svg'
import { ReactComponent as PlumGuide } from './img/Plum Guide.svg'

const StyledPartenered = memo(styled.div`
    justify-content: flex-start;

    p{
        color: #727272;
        font-size: 16px;
        line-height: 28px;
    }
`)

const Partenered: FC = () => {
  return (
    <StyledPartenered>
      <p>Partnered with:</p>
      <AirBnb />
      <Booking/ >
      <PlumGuide />

    </StyledPartenered>
  )
}

export default memo(Partenered)
