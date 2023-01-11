import styled from '@emotion/styled';
import { Positioner } from '../../styles/Common';

const Wrapper = ({ children }) => (
  <Positioner>
    <Contents>
      <Content>{children}</Content>
    </Contents>
  </Positioner>
);

export default Wrapper;

const Contents = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 5vh 12vw;
  width: 42vw;
  border-radius: 12px;
  border: 0.001rem solid black;
`;

const Content = styled.div`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 1000;
  margin-bottom: 3rem;
  text-align: center;
`;
