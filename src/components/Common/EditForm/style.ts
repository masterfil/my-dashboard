import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  position: relative;
`;

export const InputStyled = styled.input<{ borderRound?: boolean }>`
  width: 100%;
  font-size: 1rem;
  background: unset;
  color: ${({ theme }) => theme.text};
  padding: 8px 10px;
  box-sizing: border-box;
  border-radius: ${({ borderRound }) => (borderRound ? "25px" : "4px")};
  border: 1px solid #d3d3d36b;
  &:focus {
    outline: 1px solid #d3d3d36b;
  }
`;

export const SaveButton = styled.button`
  border-radius: 4px;
  padding: 0 4px;
  cursor: pointer;
  background-color: #4b4b4b;
  color: white;
  position: absolute;
  right: 6px;
`;
