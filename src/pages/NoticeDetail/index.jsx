import * as Styled from './styled';
import { noticeDetailApi } from '../../api/Api';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';

export const NoticeBox = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data, isLoading } = useQuery(['notice_detail', id], () => noticeDetailApi(id), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
  if (isLoading) return <Spinner id="notice" />;

  return (
    <Styled.Content>
      <Styled.Title>{data.data.title}</Styled.Title>
      <Styled.Date>
        {/* {data.data.modifiedDate.slice(0, 10)}{" "}
                {data.data.modifiedDate.slice(11)} */}
      </Styled.Date>
      {data.data.content &&
        data.data.content.split('\n').map((value, index) => {
          return (
            <div key={id + index}>
              {value}
              <br />
            </div>
          );
        })}
    </Styled.Content>
  );
};

const NoticeDetail = () => {
  const navigate = useNavigate();

  return (
    <Styled.AppContainer>
      <Styled.AppTitle>공지사항</Styled.AppTitle>
      <NoticeBox />
      <Styled.BackWrapper onClick={() => navigate('/notice')}>
        <Styled.Back>
          <Styled.Img alt="list_icon" width="22" src="/img/icon_list_line_24.svg" />
          목록
        </Styled.Back>
      </Styled.BackWrapper>
    </Styled.AppContainer>
  );
};

export default NoticeDetail;
