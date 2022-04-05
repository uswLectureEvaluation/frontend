import React, { useState, useEffect } from 'react';
import * as Styled from './styled';

const ScrollButton = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <div>
      {btnStatus ? (
        <Styled.TopButton onClick={handleScroll}>
          <Styled.Img src="img/icon_arrow_small_mint_24.svg" width="22" />
        </Styled.TopButton>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ScrollButton;
