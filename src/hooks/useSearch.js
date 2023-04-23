import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useSearch = () => {
  const [searchParams] = useSearchParams();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const getValue = (key) => searchParams.get(key) || '';
  const value = getValue('q');
  const option = getValue('option') || 'lectureTotalAvg';
  const majorType = getValue('majorType') || '전체';

  const handleKeypress = (e) => {
    if (e.key !== 'Enter') return;
    const inputValue = inputRef.current.value.trim();
    if (inputValue.length < 2) {
      alert('두 글자 이상 입력해주세요');
      return;
    }
    navigate(`/search?q=${inputValue}&option=${option}&majorType=${majorType}`);
  };

  useEffect(() => {
    inputRef.current.value = value;
  }, [value]);

  return [inputRef, handleKeypress];
};

export default useSearch;
