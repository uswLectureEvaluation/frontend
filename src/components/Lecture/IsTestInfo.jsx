import styled from '@emotion/styled';
import { Button, Spinner, SearchTestInfoList } from 'components';
import { fakeEvaluationList } from 'components/placeholderData';
import { isLoginStorage } from 'utils/loginStorage';
import useLectureQuery from 'hooks/useLectureQuery';
import useUserQuery from 'hooks/useUserQuery';

const NotUsePoint = ({ selectId }) => {
  const { BuyTestInfo } = useUserQuery();
  const { buy } = BuyTestInfo(selectId);
  const unlock = () => window.confirm('시험정보를 열람하시겠습니까?') && buy();

  return (
    <Wrapper>
      <Content>
        시험 정보 열람시
        <br />
        <Color> 20 포인트</Color>가 차감됩니다.
      </Content>
      <BtWidth>
        <Button color="#336af8" onClick={unlock}>
          포인트 사용하기 (-20P)
        </Button>
      </BtWidth>
    </Wrapper>
  );
};

const NoTestInfo = () => (
  <Wrapper>
    <Content>등록된 시험정보가 없어요</Content>
  </Wrapper>
);

const IsTestInfo = ({ selectId, setWritten }) => {
  const { TestInfo } = useLectureQuery();
  const isLogin = isLoginStorage();
  const { data, isLoading, isFetchingNextPage, ref } = TestInfo(selectId, setWritten);

  if (isLoading) return <Spinner />;
  const pages = data?.pages;
  const listLength = data?.pages[0].data.data.length;
  const examDataExist = data?.pages[0].data.examDataExist;

  if (!isLogin) {
    return <SearchTestInfoList page={fakeEvaluationList} />;
  } else if (listLength === 0 && examDataExist) {
    return <NotUsePoint selectId={selectId} />;
  } else if (listLength === 0 && !examDataExist) {
    return <NoTestInfo />;
  } else {
    return (
      <>
        {pages.map((page) => (
          <SearchTestInfoList isLogin={isLogin} key={page.nextPage} page={page.data.data} />
        ))}
        <div ref={ref} style={{ marginBottom: '10px' }}>
          {isFetchingNextPage && <Spinner id="nextPage" />}
        </div>
      </>
    );
  }
};
export default IsTestInfo;

const Wrapper = styled.div`
  width: 100%;
`;

const Color = styled.span`
  color: #336af8;
`;

const Content = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0;

  font-weight: 600;
  text-align: center;
  margin-top: 10rem;
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const BtWidth = styled.div`
  margin: 0 auto;
  width: 30%;

  @media only screen and (max-width: 550px) {
    width: 70%;
  }
`;
