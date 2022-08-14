import { useEffect, useState } from 'react';
import { banListApi, resListApi } from '../../api/Api';
import * as Styled from './styled';
import { FlexWrap } from '../../components/Infinite/styled';
const BanReason = () => {
  const [db, setData] = useState([]);

  const [wow, setWow] = useState([]);

  useEffect(() => {
    banListApi().then((data) => setData(data));
    resListApi().then((data) => setWow(data));
  }, []);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>블랙리스트 내역조회</Styled.AppTitle>

      {db.length !== 0 ? (
        db.map((i) => {
          return (
            <Reason
              key={Math.random()}
              id={i.id}
              title={i.blackListReason}
              judge={i.judgement}
              cdate={i.createdAt}
              edate={i.expiredAt}
            />
          );
        })
      ) : (
        <FlexWrap id="none">블랙리스트 대상이 아닙니다</FlexWrap>
      )}

      <Styled.AppTitle>이용제한 내역조회</Styled.AppTitle>

      {wow.length !== 0 ? (
        wow.map((i) => {
          return (
            <Reason
              key={Math.random()}
              id={i.id}
              title={i.restrictedReason}
              judge={i.judgement}
              cdate={i.createdAt}
              edate={i.restrictingDate}
            />
          );
        })
      ) : (
        <FlexWrap id="none">이용제한 내역이 없습니다</FlexWrap>
      )}
    </Styled.AppContainer>
  );
};

export const Reason = (props) => {
  return (
    <Styled.NoticeWrap>
      <Styled.Title>정지사유: {props.title}</Styled.Title>
      <Styled.Option>제한일시: {props.cdate}</Styled.Option>
      <Styled.Option>제한기간: {props.edate}</Styled.Option>
      <Styled.Option>조치사항: {props.judge}</Styled.Option>
    </Styled.NoticeWrap>
  );
};

export default BanReason;
