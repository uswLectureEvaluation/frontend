import { useEffect, useState, useCallback, useRef } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { noticeApi } from '../../api/Api';

export const NoticeItem = ({ id, title, modifiedDate }) => {
  const navigate = useNavigate();
  const onClick = () => navigate('/noticedetail', { state: { id: id } });

  return (
    <Styled.NoticeWrap onClick={onClick}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Option>{modifiedDate.slice(0, 10)}</Styled.Option>
    </Styled.NoticeWrap>
  );
};

const Notice = () => {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(1);
  const [page, setPage] = useState(1);
  const preventRef = useRef(true);
  const obsRef = useRef(null);

  const getDog = useCallback(async () => {
    setLoad(true);
    const res = await noticeApi(page);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      preventRef.current = true;
    }
    setLoad(false);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 1 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line no-use-before-define
  }, []);

  useEffect(() => {
    getDog();
    // eslint-disable-next-line no-use-before-define
  }, [getDog, page]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      <>
        {list.length !== 0 ? (
          <>
            {list &&
              list.map((i) => (
                <NoticeItem
                  id={i.id}
                  title={i.title}
                  modifiedDate={i.modifiedDate}
                  key={Math.random()}
                />
              ))}
            {load ? <div style={{ opacity: '0', width: '0%' }}>로딩 중</div> : <></>}
            <div ref={obsRef} style={{ width: '0%', opacity: '0' }}>
              옵저버 Element
            </div>
          </>
        ) : (
          <>
            <Styled.NoNotice>아직 공지사항이 없어요.</Styled.NoNotice>
            {load ? <div style={{ opacity: '0', width: '0%' }}>로딩 중</div> : <></>}
            <div ref={obsRef} style={{ width: '0%', opacity: '0' }}>
              옵저버 Element
            </div>
          </>
        )}
      </>
    </Styled.AppContainer>
  );
};

export default Notice;
