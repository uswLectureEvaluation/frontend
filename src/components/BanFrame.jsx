import styled from '@emotion/styled';
import { FlexWrap } from 'styles/Common';

const noDataMsg = {
  ban: '블랙리스트 대상이 아닙니다',
  res: '이용제한 내역이 없습니다',
};

const BanFrame = ({ type, list }) => {
  const isData = list.length !== 0;
  return (
    <>
      {isData ? (
        list.map((item) => (
          <Reason
            key={item.createdAt}
            id={item.id}
            title={item.blackListReason}
            judge={item.judgement}
            cdate={item.createdAt}
            edate={item.expiredAt}
          />
        ))
      ) : (
        <FlexWrap id="none">{noDataMsg[type]}</FlexWrap>
      )}
    </>
  );
};

const Reason = ({ title, cdate, edate, judge }) => {
  return (
    <NoticeWrap>
      <Title>정지사유: {title}</Title>
      <Option>제한일시: {cdate}</Option>
      <Option>제한기간: {edate}</Option>
      <Option>조치사항: {judge}</Option>
    </NoticeWrap>
  );
};

export default BanFrame;

const Title = styled.div`
  display: flex;
  font-size: 1rem;
  margin-right: 0.7rem;
`;

const Option = styled.div`
  border-radius: 10px;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: #a3a3a3;

  font-weight: 300;
`;

const NoticeWrap = styled.div`
  width: 100%;
  border: 1.5px solid #f1f1f1;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  margin-top: 2vh;

  &:hover {
    cursor: pointer;
  }
`;
