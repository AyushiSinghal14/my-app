import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${(props) => (props.theme === 'light' ? 'white' : '#333')};
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  position: relative;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
`;

const Modal = ({ show, onClose, children, theme }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent theme={theme}>
        <CloseButton theme={theme} onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
