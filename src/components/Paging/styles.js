import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;

  button {
    background: #ffff;
    color: #222;
    margin-top: 15px;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 4px;

    &:hover {
      background-color: #eee;
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: baseline;
    align-content: stretch;

    div {
      color: #222;
      margin-top: 15px;
      border: 1px solid #ddd;
      padding: 5px;
      border-radius: 4px;
      text-align: center;
    }

    span {
      font-size: 12px;
    }
  }
`;
