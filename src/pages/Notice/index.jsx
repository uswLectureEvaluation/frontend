import { memo, useEffect, useState } from 'react';
import * as Styled from './styled';
import NoticeItem from '../../components/NoticeItem';
import { noticeApi } from '../../api/Api';

const Notice = () => {
  const [db, setData] = useState({
    data: [],
  });
  useEffect(() => {
    noticeApi(1).then((data) => setData(data));
  }, []);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>

      {db.data.map((i) => {
        return <NoticeItem id={i.id} title={i.title} modifiedDate={i.modifiedDate} key={i.id} />;
      })}
    </Styled.AppContainer>
  );
};

export default memo(Notice);
