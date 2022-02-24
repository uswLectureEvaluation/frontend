import React from 'react'
import Ntable from '../Table/Ntable'
import { DContainer, Display, Row, TextCenter, VerticalMiddle } from './Header.elemets'

const Nheader = () => {
  return (
    <Display>
      <VerticalMiddle>
        <DContainer>
          <Row>
            <TextCenter>공지사항</TextCenter>
            <Ntable />
          </Row >
        </DContainer>
      </VerticalMiddle>
    </Display >
  )
}

export default Nheader