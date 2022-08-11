import { useState, useEffect } from 'react';
import * as Styled from './styled';

const ScrollButton = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) setBtnStatus(true);
    else setBtnStatus(false);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleFollow);
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <>
      {btnStatus ? (
        <Styled.TopButton onClick={handleScroll}>
          <img src="img/icon_up_arrow_solid_24.svg" alt="upArrow" width="22" />
        </Styled.TopButton>
      ) : null}
    </>
  );
};

export default ScrollButton;
