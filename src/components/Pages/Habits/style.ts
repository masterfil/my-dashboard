import styled from "styled-components";

export const TableStyled = styled.table`
  border-collapse: collapse;
  max-width: 100%;
  text-align: center;

  & > th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const TableHeader = styled.th`
  padding: 1rem;
  color: white;
  border: 1px solid #ddd;
  width: 50px;
  max-width: 100%;
`;

export const Wrapper = styled.div`
  width: 400px;
  margin-bottom: 1rem;
`;

export const ListHabit = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HabitContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
