// TODO: Create a typography component
import styled from "styled-components";

export const Heading1 = styled.h1`
  color: ${({ theme }) => theme.text};
`;

export const Text = styled.p<{ weight?: string }>`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  font-weight: ${({ weight }) => weight || "normal"};
`;

export const TitlePage = styled.h1`
  margin-bottom: 1rem;
`;

export const DisabledText = styled.p`
  color: gray;
`;

export const TextSideBar = styled.span<{ weight?: string; showName?: boolean }>`
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  font-weight: ${({ weight }) => weight || "normal"};
  display: ${({ showName }) => (showName ? "none" : "flex-inline")};
  white-space: nowrap;
  overflow: hidden;
  opacity: ${({ showName }) => (showName ? 0 : 1)};
  transition: width 0.3s ease,
    opacity 0.3s ease ${({ showName }) => (showName ? "0.3s" : "0s")};
`;

