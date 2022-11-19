import { useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { mainApi } from '../../api/Api';
import StarRatings from 'react-star-ratings';
import { selectIdState } from '../../features/selectIdSlice';
import { useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import Spinner from '../Spinner';

const MainList = ({ lecture, checkClass }) => {
  let major = checkClass === '전체' ? '' : checkClass;
  const { data, isLoading } = useQuery(['mainList', lecture, major], () =>
    mainApi(lecture, 1, major)
  );
  if (isLoading) return <Spinner />;

  return (
    <Styled.GridWrap>
      {data?.data.map((row) => (
        <Subject
          key={row.id}
          id={row.id}
          lectureName={row.lectureName}
          professor={row.professor}
          lectureType={row.lectureType}
          star={row.lectureTotalAvg}
          lectureSatisfactionAvg={row.lectureSatisfactionAvg}
          lectureHoneyAvg={row.lectureHoneyAvg}
          lectureLearningAvg={row.lectureLearningAvg}
          majorType={row.majorType}
        />
      ))}
    </Styled.GridWrap>
  );
};

export const Detail = (props) => {
  return (
    <div>
      <Styled.StarFlex id="top">
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            만족도
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.lectureSatisfactionAvg.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            꿀강지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.lectureHoneyAvg.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            배움지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.lectureLearningAvg.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
        </Styled.FlexContainer>
      </Styled.StarFlex>
    </div>
  );
};

export const Subject = (props) => {
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  let title = props.lectureName;

  if (title.length >= 14) {
    title = props.lectureName.substr(0, 14) + '...';
  }

  const onClick = (id) => {
    dispatch(selectIdState(id));
    navigate('/lectureinfo');
  };

  return (
    <Styled.LectureWrapper onClick={() => onClick(props.id)}>
      <Styled.MarginTop>
        <Styled.TitleWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Option>{props.lectureType}</Styled.Option>
        </Styled.TitleWrapper>
        <Styled.Professor>
          {props.majorType} | {props.professor}
        </Styled.Professor>
        <Styled.RateWrapper>
          <StarRatings
            rating={props.star}
            starRatedColor="#336af8"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <Styled.Rate>{props.star.toFixed(1)}</Styled.Rate>
          <Styled.Minute
            onClick={(e) => {
              setModal(!modal);
              e.stopPropagation();
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </Styled.Minute>
        </Styled.RateWrapper>
      </Styled.MarginTop>
      {modal === true ? (
        <Detail
          lectureSatisfactionAvg={props.lectureSatisfactionAvg}
          lectureHoneyAvg={props.lectureHoneyAvg}
          lectureLearningAvg={props.lectureLearningAvg}
        />
      ) : null}
    </Styled.LectureWrapper>
  );
};

export default MainList;
