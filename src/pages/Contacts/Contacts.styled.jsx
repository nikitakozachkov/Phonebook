import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const HeaderText = styled.h1`
  margin: 0;
  font-size: 24px;
  margin-right: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  border-radius: 4px;
  font: inherit;
  font-size: 12px;
  color: #868784;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #023047;
  }

  & svg {
    width: 22px;
    height: 22px;
  }
`;
