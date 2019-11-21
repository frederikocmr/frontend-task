import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 20px;
  justify-content: center;

  h1 {
    font-size: 30px;
    font-weight: bold;
  }

  svg {
    margin-right: 10px;
    font-size: 40px;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #f6f7f9;
  padding: 30px;
  margin: 20px auto;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  justify-content: center;
  margin-top: 20px;
  display: flex;
  font-size: 30px;
  align-items: center;
  height: 30px;

  svg {
    margin-right: 10px;
    animation: ${rotate} 2s linear infinite;
  }
`;
