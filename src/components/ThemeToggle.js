import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../themeSlice';
import styled from 'styled-components';

const ToggleButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  background-color: ${(props) => (props.theme === 'light' ? '#ffce00' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#ffce00')};

  &:hover {
    background-color: ${(props) => (props.theme === 'light' ? '#ffd633' : '#555')};
  }
`;

const ThemeToggle = ({ theme }) => {
  const dispatch = useDispatch();

  return (
    <ToggleButton theme={theme} onClick={() => dispatch(toggleTheme())}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </ToggleButton>
  );
};

export default ThemeToggle;
