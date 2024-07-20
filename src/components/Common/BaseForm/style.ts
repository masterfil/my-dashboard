import { styled } from "styled-components";

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
  padding: 8px 10px;
  box-sizing: border-box;
  border-radius: ${({ borderRound }) => (borderRound ? "25px" : "6px")};
  border: 1px solid #d3d3d36b;
  &:focus {
    outline: 1px solid #d3d3d36b;
  }

  /* height: 40px;
    padding: 0 .5rem;
    border: 1px solid #d3d3d36b;
    font-size: 1rem;
    */
`;

export const LabelStyled = styled.label``;

export const AddButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 4px;
  width: 24px;
  height: 24px;

  & > svg:hover {
    color: #4b4b4b;
  }
`;
