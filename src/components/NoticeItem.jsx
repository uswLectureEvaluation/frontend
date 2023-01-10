import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NoticeItem = ({ id, title, modifiedDate }) => {
  const navigate = useNavigate();
  const onClick = () => navigate('/noticedetail', { state: { id: id } });

  return (
    <NoticeWrap onClick={onClick}>
      <Title>{title}</Title>
      <Option>{modifiedDate.slice(0, 10)}</Option>
    </NoticeWrap>
  );
};

export default NoticeItem;

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
