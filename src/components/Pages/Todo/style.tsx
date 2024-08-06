import styled from "styled-components";

export const TodoContainer = styled.div`
  width: 400px;
`;

export const ListItemContainer = styled.ul`
  list-style: none;
  width: 100%;
`;

export const TodoItem = styled.li<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 8px 10px;
  font-size: 1rem;
  /* background-color: ${({ isChecked }) => (isChecked ? "#f0f0f0" : "")}; */
  /* transition: background-color .1s; */
  border: 1px solid #d3d3d36b;
  margin-bottom: 0.5rem;
  border-radius: 4px;
`;

export const TodoInput = styled.input`
  border: none;
  width: 1rem;
  height: 1rem;
  margin: 0;
  cursor: pointer;
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 0.5rem;
`;

export const TextTodo = styled.p<{ isChecked: boolean }>`
  max-width: 500px;
  font-size: 0.875rem;
  word-wrap: break-word;
  text-decoration: ${({ isChecked }) => (isChecked ? "line-through" : "none")};
  /* color: ${({ isChecked }) => (isChecked ? "gray" : "black")}; */
  color: ${({ theme }) => theme.text};
  transition: all 0.1s;
`;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TodoActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3px;
  cursor: pointer;
  color: #4b4b4b;

  & > svg:hover {
    color: #4b4b4b;
  }
`;
