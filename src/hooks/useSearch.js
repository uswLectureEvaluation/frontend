import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useSearch = () => {
  const [searchParams] = useSearchParams();
  const input = useRef(null);
  const navigate = useNavigate();
  const get = (key) => searchParams.get(key);
  const value = get('q') || '';
  const option = get('option') || 'lectureTotalAvg';
  const majorType = get('majorType') || '전체';

  const onKeypress = (e) => {
    if (e.key !== 'Enter') return;
    if (input.current.value.length < 2) {
      alert('두 글자 이상 입력해주세요');
      return;
    }
    navigate(`/search?q=${input.current.value}&option=${option}&majorType=${majorType}`);
  };

  useEffect(() => {
    input.current.value = value || '';
  }, [value]);

  return [input, onKeypress];
};

export default useSearch;
