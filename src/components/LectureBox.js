import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import { Color } from '../GlobalStyle';

export const Detail = (props) => {
  return (
    <div>
      <StarFlex id="top">
        <FlexContainer id="col">
          <StarFlex id="between">
            만족도
            <PaddingRight />
            <Rate id="modal">{props.lectureSatisfactionAvg.toFixed(1)}</Rate>
          </StarFlex>
        </FlexContainer>
        <FlexContainer id="col">
          <StarFlex id="between">
            꿀강지수
            <PaddingRight />
            <Rate id="modal">{props.lectureHoneyAvg.toFixed(1)}</Rate>
          </StarFlex>
        </FlexContainer>
        <FlexContainer id="col">
          <StarFlex id="between">
            배움지수
            <PaddingRight />
            <Rate id="modal">{props.lectureLearningAvg.toFixed(1)}</Rate>
          </StarFlex>
        </FlexContainer>
      </StarFlex>
    </div>
  );
};

const Subject = ({ row }) => {
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();

  let title = row.lectureName;

  if (title.length >= 14) {
    title = row.lectureName.substr(0, 14) + '...';
  }

  const onClick = (id) => {
    navigate(`/lectureinfo?id=${id}`);
  };

  return (
    <LectureWrapper onClick={() => onClick(row.id)}>
      <MarginTop>
        <TitleWrapper>
          <Title>{title}</Title>
          <Option>{row.lectureType}</Option>
        </TitleWrapper>
        <Professor>
          {row.majorType} | {row.professor}
        </Professor>
        <RateWrapper>
          <StarRatings
            rating={row.lectureTotalAvg}
            starRatedColor="#336af8"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <Rate>{row.lectureTotalAvg.toFixed(1)}</Rate>
          <Minute
            onClick={(e) => {
              setModal(!modal);
              e.stopPropagation();
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </Minute>
        </RateWrapper>
      </MarginTop>
      {modal === true ? (
        <Detail
          lectureSatisfactionAvg={row.lectureSatisfactionAvg}
          lectureHoneyAvg={row.lectureHoneyAvg}
          lectureLearningAvg={row.lectureLearningAvg}
        />
      ) : null}
    </LectureWrapper>
  );
};

export default Subject;

export const Minute = styled.span`
  font-size: 12px;
  color: #515151;
  text-decoration: underline;
  padding-left: 6px;
  font-family: 'Pretendard-Regular';

  &:hover {
    cursor: pointer;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 500;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.1rem;
`;

export const Professor = styled.div`
  display: flex;
  color: #515151;
  font-size: 14px;
  margin: 0.3rem 0;
  font-family: 'Pretendard-Regular';
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
`;

export const RateWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const Rate = styled.span`
  color: #336af8;
  font-size: 18px;
  font-weight: 500;
  padding-left: 4px;
  &#modal {
    font-size: 16px;
    padding-left: 0px;
  }
`;

export const LectureWrapper = styled.div`
  width: 100%;
  border: 1px solid ${Color('border')};
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-family: 'Pretendard-Medium';
`;

export const MarginTop = styled.div`
  padding: 14px 24px;
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding: 6px 12px;
  font-family: 'Pretendard-Medium';
  font-size: 13px;
  &#top {
    border-top: 1px solid #e0e0e0;
  }
  &#bottom {
  }
  &#between {
    justify-content: space-between;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

export const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;
