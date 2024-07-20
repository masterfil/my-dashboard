import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 1rem;
  padding: 2px 14px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
`;

interface ButtonProps {
  children?: ReactNode
  onClick: () => void

}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
