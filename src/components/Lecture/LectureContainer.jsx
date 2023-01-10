import styled from '@emotion/styled';
import LectureCard from './LectureCard';

const LectureContainer = ({ data }) => {
  let oddList = data?.filter((row, i) => {
    if (!(i % 2)) return row;
  });
  let evenList = data?.filter((row, i) => {
    if (i % 2) return row;
  });

  return (
    <FlexWrap>
      <FlexWrapSub>
        {oddList?.map((row) => (
          <LectureCard key={row.id} row={row} />
        ))}
      </FlexWrapSub>
      <FlexWrapSub>
        {evenList?.map((row) => (
          <LectureCard key={row.id} row={row} />
        ))}
      </FlexWrapSub>
      <FullWrapSub>
        {data?.map((row) => (
          <LectureCard key={row.id} row={row} />
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

const FlexWrapSub = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const FullWrapSub = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;