import styled from '@emotion/styled';
import { FlexWrap } from '../../styles/Common';
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
