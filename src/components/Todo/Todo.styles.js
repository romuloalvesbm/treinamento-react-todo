import styled from "styled-components";

export const TodoContainer = styled.main`
  background-color: #fff;
  max-width: 600px;
  margin: 24px auto;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #ccc;

  h3 {
    color: #003366;
    margin-bottom: 4px;
  }

  form {
    display: flex;
    gap: 8px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 12px;

    input {
      flex: 1;
      padding: 10px;
    }

    select {
      padding: 12px;
    }

    button {
      padding: 12px;
      background-color: #003366;
      color: #fff;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #000;
      }

      &:disabled {
        background-color: #ccc;
        color: #666;
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }
`;
