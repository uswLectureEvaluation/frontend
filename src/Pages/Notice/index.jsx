import { memo, useEffect, useState } from 'react';
import * as Styled from './styled';
import NoticeItem from '../../components/NoticeItem';
import { noticeApi } from '../../api/Api';
import Loader from '../../components/Loader';

const Notice = () => {
  const [db, setData] = useState({
    data: [],
  });

  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(db.data);
  }, [db.data]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    noticeApi().then((data) => setData(data));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>

      {db.data.map((i) => {
        return <NoticeItem id={i.id} title={i.title} modifiedDate={i.modifiedDate} key={i.id} />;
      })}
       <div ref={setTarget} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
    </Styled.AppContainer>
  );
};

export default memo(Notice);
