import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useSearch = () => {
  const input = useRef(null);
  const navigate = useNavigate();

  const onKeypress = (e) => {
    if (e.key !== 'Enter') return;
    if (input.current.value.length < 2) {
      alert('두 글자 이상 입력해주세요');
      return;
    }

    navigate(`/search?q=${input.current.value}&option=lectureTotalAvg&majorType=전체`);
  };

  return [input, onKeypress];
};

export default useSearch;
