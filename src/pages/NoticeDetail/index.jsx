import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { useLocation } from 'react-router';
import { noticeDetailApi } from '../../api/Api';
import { useNavigate } from 'react-router-dom';

const NoticeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;

  const [db, setData] = useState({ data: {} });

  useEffect(() => {
    noticeDetailApi(id).then((data) => setData(data));
  }, [id]);

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      <Styled.Content>
        <Styled.Title>{db.data.title}</Styled.Title>
        <Styled.Date>
          {/* {db.data.modifiedDate.slice(0, 10)}{" "}
                    {db.data.modifiedDate.slice(11)} */}
        </Styled.Date>
        {db.data.content}
      </Styled.Content>
      <Styled.BackWrapper onClick={() => navigate('/notice')}>
        <Styled.Back>
          <Styled.Img loading="lazy" width="22" src="img/icon_list_line_24.svg" />
          목록
        </Styled.Back>
      </Styled.BackWrapper>
    </Styled.AppContainer>
  );
};

export default NoticeDetail;
