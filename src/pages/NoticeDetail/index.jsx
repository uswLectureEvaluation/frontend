import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Notices from '../../api/Notice';
import Spinner from '../../components/Spinner';
import * as Styled from './styled';

export const NoticeBox = () => {
  const notice = Notices();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data, isLoading } = useQuery(['notice_detail', id], () => notice.detail(id), {
    cacheTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
  if (isLoading) return <Spinner id="notice" />;

  return (
    <Styled.Content>
      <Styled.Title>{data.data.title}</Styled.Title>
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
