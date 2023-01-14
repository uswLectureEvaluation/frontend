import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { User } from 'api';
import { Spinner } from 'components';
import { AppContainer } from 'styles/Common';

const HistoryTest = () => {
  const user = User();
  const { data: purchased, isLoading } = useQuery(
    ['myInfo', 'purchasedTestInfo'],
    user.purchasedTestInfo
  );
  if (isLoading) return <Spinner id="myInfo" />;
  const purchasedTestInfo = purchased.data;

  return (
    <AppContainer>
      <AppTitle>구매이력</AppTitle>

      {purchasedTestInfo.map((item) => {
        return (
          <NoticeItem
            title={item.lectureName}
            professor={item.professor}
            major={item.majorType}
            createDate={item.createDate.slice(0, 10)}
            key={item.id}
          />
        );
      })}
    </AppContainer>
  );
};

const NoticeItem = ({ title, professor, major, createDate }) => {
  return (
    <NoticeWrap>
      <Option>{createDate}</Option>
      <TitleWrapper>
        <Title>{title}</Title>
        <Professor>
          {major} | {professor}
        </Professor>
      </TitleWrapper>
      <MobileTitleWrapper>
        <Professor>
          {major} | {professor}
        </Professor>
        <Title>{title}</Title>
      </MobileTitleWrapper>
    </NoticeWrap>
  );
};

export default HistoryTest;

const AppTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;

  font-weight: 600;
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  display: flex;
  font-size: 1rem;
  margin-right: 0.7rem;
`;

const Option = styled.div`
  border-radius: 10px;
  padding: 0.5rem 0;
  margin-right: 1rem;
  font-size: 14px;
  color: #a3a3a3;

  font-weight: 400;
`;

const NoticeWrap = styled.div`
  width: 100%;
  border: 1.5px solid #f1f1f1;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  margin-top: 2vh;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Professor = styled.div`
  display: flex;
  color: #222;

  font-weight: 400;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-left: 10px;
  @media screen and (max-width: 550px) {
    margin-left: 0px;
    margin-bottom: 10px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const MobileTitleWrapper = styled.div`
  display: none;
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;
