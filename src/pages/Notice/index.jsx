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
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);

  const getDog = useCallback(async () => {
    setLoad(true); //로딩 시작
    const res = await noticeApi(page);
    console.log(page, res);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      preventRef.current = true;
    } else {
      console.log(res); //에러
    }
    setLoad(false); //로딩 종료
  }, [page]);

  const preventRef = useRef(true);
  const obsRef = useRef(null);

  useEffect(() => {
    getDog();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line no-use-before-define
  }, [getDog]);

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

      {list === [] ? (
        list.map((i) => {
          return <NoticeItem id={i.id} title={i.title} modifiedDate={i.modifiedDate} key={i.id} />;
        })
      ) : (
        <Styled.NoNotice>아직 공지사항이 없어요.</Styled.NoNotice>
      )}
      {load ? <div style={{ opacity: '0', width: '0%' }}>로딩 중</div> : <></>}
      <div ref={obsRef} style={{ opacity: '0', width: '0%' }}>
        옵저버 Element
      </div>
    </Styled.AppContainer>
  );
};

export default Notice;
