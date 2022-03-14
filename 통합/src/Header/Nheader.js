import React from 'react'
import Ntable from '../Table/Ntable'
import { DContainer, Display, Row, TextCenter, VerticalMiddle } from './Header.elemets'
import { Container } from "@material-ui/core";
const Nheader = () => {
  return (
    <Container maxWidth="lg">
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
    </Container>
  )
}

export default Nheader