import styled from "styled-components";

export const TodoItemContainer = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
  /* justify-content: space-between; */
  align-items: center;
  gap: 8px;

  p {
    flex: 1;
    color: #666;
    cursor: pointer;
  }

  .concluido {
    text-decoration: line-through;
    color: blue;
  }

  span {
    color: ${({ prioridade }) =>
      prioridade === "Alta"
        ? "red"
        : prioridade === "Média"
          ? "orange"
          : "green"};
  }

  button {
    color: red;
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
