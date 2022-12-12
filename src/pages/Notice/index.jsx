import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { useInfiniteQuery } from 'react-query';
import Spinner from '../../components/Spinner';
import { useInView } from 'react-intersection-observer';
import { Fragment, useEffect } from 'react';
import Notices from '../../api/Notice';

export const NoticeItem = ({ notice }) => {
  const navigate = useNavigate();
  const onClick = () => navigate(`/notice/detail?id=${notice.id}`);

  return (
    <Styled.NoticeWrap onClick={onClick}>
      <Styled.Title>{notice.title}</Styled.Title>
      <Styled.Option>{notice.modifiedDate.slice(0, 10)}</Styled.Option>
    </Styled.NoticeWrap>
  );
};

export const NoticeContainer = () => {
  const notice = Notices();
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['notice'],
    ({ pageParam = 1 }) => notice.list(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
    }
  );
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);
  if (isLoading) return <Spinner id="notice" />;

  return (
    <>
      {data.pages.length ? (
        <>
          {data.pages.map((page) => (
            <Fragment key={page.nextPage}>
              {page.data.data.map((notice) => (
                <NoticeItem notice={notice} key={notice.id} />
              ))}
            </Fragment>
          ))}
          <div ref={ref} style={{ marginBottom: '10px' }}>
            {isFetchingNextPage ? <Spinner /> : null}
          </div>
        </>
      ) : (
        <Styled.NoNotice>아직 공지사항이 없어요.</Styled.NoNotice>
      )}
    </>
  );
};

const Notice = () => {
  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      <NoticeContainer />
    </Styled.AppContainer>
  );
};

export default Notice;
