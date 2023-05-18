import styled from '@emotion/styled';
import { FlexWrap } from 'styles/common';
import type { BlacklistInfo, RestrictionInfo } from 'types/user';

const noDataMsg = {
  ban: '블랙리스트 대상이 아닙니다',
  res: '이용제한 내역이 없습니다',
};

type ListItem = BlacklistInfo | RestrictionInfo;

interface BanFrameProps {
  banType: keyof typeof noDataMsg;
  list: ListItem[] | undefined;
}

const BanFrame = ({ banType, list }: BanFrameProps) => {
  const isData = list?.length === 0;

  if (isData) return <FlexWrap id="none">{noDataMsg[banType]}</FlexWrap>;

  return (
    <>
      {list?.map((item) => {
        const isBlacklist = isBlacklistInfo(item);
        const title = isBlacklist ? item.blackListReason : item.restrictedReason;
        const edate = isBlacklist ? item.expiredAt : item.restrictingDate;

        return (
          <NoticeWrap key={item.createdAt.toString()}>
            <Title>정지사유: {title}</Title>
            <Option>제한일시: {item.createdAt.toString()}</Option>
            <Option>제한기간: {edate.toString()}</Option>
            <Option>조치사항: {item.judgement}</Option>
          </NoticeWrap>
        );
      })}
    </>
  );
};

export default BanFrame;

const isBlacklistInfo = (item: ListItem): item is BlacklistInfo =>
  (item as BlacklistInfo).blackListReason !== undefined;

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
