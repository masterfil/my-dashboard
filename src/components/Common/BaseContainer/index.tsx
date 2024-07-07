import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface BaseContainerProps {
  children: ReactNode;
  className?: string;
}

export const BaseContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 0.8rem;
  overflow-y: auto;
`;

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;
`;

export const BaseContainer: React.FC<BaseContainerProps> = ({
  children,
  className,
}) => {
  return (
    <BaseContainerStyled className={className}>
      <ContentWrapper>{children}</ContentWrapper>
    </BaseContainerStyled>
  );
};
