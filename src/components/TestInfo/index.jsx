import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import Button from '../Button';
import { buyTestInfo, searchExamApi } from '../../api/Api';
import SearchTestList from '../../components/SearchTestList';

export const NotUsePoint = (props) => (
  <Styled.Wrapper>
    <Styled.Content>
      시험 정보를 보려면<Styled.Color> 20 포인트</Styled.Color>가 필요해요
    </Styled.Content>
    <Styled.BtWidth>
      <Button color="#346cfd" onClick={props.unlock}>
        포인트 사용하기
      </Button>
    </Styled.BtWidth>
  </Styled.Wrapper>
);

export const NoTestInfo = () => (
  <Styled.Wrapper>
    <Styled.Content>등록된 시험정보가 없어요</Styled.Content>
  </Styled.Wrapper>
);

const TestInfo = (props) => {
  const [db, setData] = useState({
    data: [],
    examDataExist: false,
  });
  useEffect(() => {
    searchExamApi(props.selectId).then((data) => setData(data));
  }, []);
  const unlock = () => {
    if (window.confirm('시험정보를 열람하시겠습니까?') === true) {
      buyTestInfo(props.selectId);
    } else {
      return;
    }
  };

  if (db.data.length === 0 && db.examDataExist === true) {
    return <NotUsePoint unlock={unlock} />;
  } else if (db.data.length === 0 && db.examDataExist === false) {
    return <NoTestInfo />;
  } else {
    return <SearchTestList db={db.data} />;
  }
};
export default TestInfo;
