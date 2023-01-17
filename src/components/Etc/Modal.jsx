import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Modal = ({ isOpen, onRequestClose, children }) => {
  const onKeyPress = (e) => {
    if (e.key === 'Escape') {
      onRequestClose();
    }
  };

  return (
    isOpen && (
      <ModalContainer tabIndex={0} onClick={onRequestClose} onKeyDown={onKeyPress}>
        <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
      </ModalContainer>
    )
  );
};

export default Modal;

const modalShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalBody = styled.div`
  display: flex;
  position: absolute;
  padding: 10px;
  min-width: 700px;
  max-height: 95vh;
  text-align: left;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  animation: ${modalShow} 0.2s;
  @media only screen and (max-width: 550px) {
    min-width: 90%;
  }
`;
