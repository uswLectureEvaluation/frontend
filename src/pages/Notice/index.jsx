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

  const getDog = useCallback(async () => {
    const res = await noticeApi(page);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      preventRef.current = true;
    } else {
      console.error(res); //에러
    }
    console.log(page, res.data)
  }, [page]);

  const preventRef = useRef(true);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    getDog();

    // eslint-disable-next-line no-use-before-define
  }, [getDog, page]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>

      {list.length !== 0 ? (
        list.map((i) => {
          return <NoticeItem id={i.id} title={i.title} modifiedDate={i.modifiedDate} key={Math.random()} />;
        })
      ) : (
        <Styled.NoNotice>아직 공지사항이 없어요.</Styled.NoNotice>
      )}
    </Styled.AppContainer>
  );
};

export default Notice;
