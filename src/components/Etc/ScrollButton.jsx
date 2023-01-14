import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

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
    btnStatus && (
      <TopButton onClick={handleScroll}>
        <img src="/images/icon_up_arrow_solid_24.svg" alt="upArrow" width="22" height="22" />
      </TopButton>
    )
  );
};

export default ScrollButton;

const TopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  border: 1px solid #336af8;
  background-color: white;
  color: #333;
  cursor: pointer;
  padding: 1rem;
  border-radius: 100%;
`;
