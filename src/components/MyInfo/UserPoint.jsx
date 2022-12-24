import * as Styled from '../../pages/MyInfo/styled';

const UserPoint = ({ my, isLogin }) => {
  return (
    <Styled.Content>
      <div style={{ filter: !isLogin ? 'blur(6px)' : 'none' }}>
        <Styled.TitleFlex>
          <Styled.Title id="top">현재 보유 포인트</Styled.Title>
          <Styled.OptionPoint id="mypoint">{my.point}p</Styled.OptionPoint>
        </Styled.TitleFlex>

        <Styled.FlexContainer>
          <Styled.OptionTitle>작성한 강의평가</Styled.OptionTitle>
          <Styled.FlexContainer id="last">
            <Styled.Color>{my.writtenEvaluation}</Styled.Color>개
          </Styled.FlexContainer>
          <Styled.OptionPoint id="plus">+{my.writtenEvaluation * 10}</Styled.OptionPoint>
        </Styled.FlexContainer>
        <Styled.FlexContainer>
          <Styled.OptionTitle>작성한 시험정보</Styled.OptionTitle>
          <Styled.FlexContainer id="last">
            <Styled.Color>{my.writtenExam}</Styled.Color>개
          </Styled.FlexContainer>
          <Styled.OptionPoint id="plus">+{my.writtenExam * 20}</Styled.OptionPoint>
        </Styled.FlexContainer>
        <Styled.FlexContainer>
          <Styled.OptionTitle>시험정보 열람 횟수</Styled.OptionTitle>
          <Styled.FlexContainer id="last">
            <Styled.Color id="p">{my.viewExam}</Styled.Color>개
          </Styled.FlexContainer>
          <Styled.OptionPoint id="minus">-{my.viewExam * 20}</Styled.OptionPoint>
        </Styled.FlexContainer>
      </div>
    </Styled.Content>
  );
};

export default UserPoint;
