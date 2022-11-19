import styled from 'styled-components';
import Subject from './LectureBox';

const LectureContainer = ({ data }) => {
  let oddList = data.filter((row, i) => {
    if (!(i % 2)) return row;
  });
  let evenList = data.filter((row, i) => {
    if (i % 2) return row;
  });

  return (
    <FlexWrap>
      <FlexWrapSub>
        {oddList.map((row) => (
          <Subject key={row.id} row={row} />
        ))}
      </FlexWrapSub>
      <FlexWrapSub>
        {evenList.map((row) => (
          <Subject key={row.id} row={row} />
        ))}
      </FlexWrapSub>
      <FullWrapSub>
        {data.map((row) => (
          <Subject key={row.id} row={row} />
        ))}
      </FullWrapSub>
    </FlexWrap>
  );
};

export default LectureContainer;

export const FlexWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: Pretendard-Medium;

  &#none {
    display: flex;
    justify-content: center;
    color: #a3a3a3;
    font-size: 20px;
    margin: 40px 0px;
    @media screen and (max-width: 550px) {
      font-size: 15px;
    }
  }
`;

export const FlexWrapSub = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const FullWrapSub = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
