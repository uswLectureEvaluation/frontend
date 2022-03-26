import React, { useEffect, useState } from 'react'
import Ntable from '../Table/Ntable'
import { Wrapper, DContainer, Display, Row, TextCenter, VerticalMiddle } from '../Pages/Main/Header.elemets'
import { Container } from "@material-ui/core";
import { noticeApi } from '../Api/Api';
const Nheader = () => {

  const [db, setData] = useState({
    data: []
  })

  useEffect(() => {
    noticeApi(setData)
  }, []
  )

  return (
    <Container maxWidth="lg">
      <Wrapper>
        <Display>
          <VerticalMiddle>
            <DContainer>
              <Row>
                <TextCenter>공지사항</TextCenter>
                <div>
                  {
                    db.data.map((data) => (
                      <div>
                        <h1>{data.id}</h1>
                        <h1>{data.title}</h1>
                        <h1>{data.modifiedDate}</h1>
                      </div>
                    ))
                  }
                </div>
                <Ntable />
              </Row >
            </DContainer>
          </VerticalMiddle>
        </Display >
      </Wrapper>
    </Container>
  )
}

export default Nheader