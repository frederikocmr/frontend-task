import styled from 'styled-components';

export const List = styled.ul`
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  a {
    text-decoration: none;
  }

  li {
    display: flex;
    margin-top: 15px;
    padding: 15px 10px;
    border: 1px solid #eee;
    background-color: #ffffff;
    border-radius: 4px;
    -webkit-box-shadow: 2px 17px 65px -20px rgba(200, 200, 200, 1);
    -moz-box-shadow: 2px 17px 65px -20px rgba(200, 200, 200, 1);
    box-shadow: 2px 17px 65px -20px rgba(200, 200, 200, 1);

    &:hover {
      background-color: #fefefe;
      -webkit-box-shadow: 2px 17px 65px -20px #555;
      -moz-box-shadow: 2px 17px 65px -20px #555;
      box-shadow: 2px 17px 65px -20px #555;
    }
  }

  & + li {
    margin-top: 40px;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;
    margin-right: 15px;
    strong {
      margin-bottom: 10px;

      h3 {
        font-size: 16px;
        color: #333;

        @media (max-width: 768px) {
          font-size: 12px;
        }
      }
    }

    div {
      margin: 5px 0;
    }

    span {
      background: #eeeeee;
      color: #222;
      border-radius: 2px;
      font-size: 12px;
      font-weight: 600;
      height: 20px;
      padding: 3px 4px;
      margin-right: 10px;

      @media (max-width: 768px) {
        font-size: 10px;
      }

      svg {
        vertical-align: text-top;
        display: inline-block;
      }
    }

    p {
      margin-top: 10px;
      text-align: justify;
      color: #222;
      font-size: 14px;
      line-height: 1.3;

      @media (max-width: 768px) {
        font-size: 8px;
      }

      @media (max-width: 400px) {
        display: none;
      }
    }
  }
`;
