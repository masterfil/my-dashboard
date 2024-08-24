import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ isSelected?: boolean }>`
  border-radius: 1rem;
  padding: 2px 14px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  border: 0;
  background-color: ${({isSelected}) => isSelected ? 'gray' : ''};
`;

interface ButtonProps {
  children?: ReactNode;
  onClick: () => void;
  isSelected?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isSelected,
}) => {
  return <StyledButton onClick={onClick} isSelected={isSelected}>{children}</StyledButton>;
};
