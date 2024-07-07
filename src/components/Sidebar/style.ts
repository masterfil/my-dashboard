import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionStyled = styled.section`
  padding: 16px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  /* grid-column: 1 / 2;
    grid-row: 1 / 3; */
  grid-area: sidebar;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  /* padding-top: 1rem; */
`;

export const ListItem = styled.li`
  cursor: pointer;
`;

export const ListLink = styled(Link)<{
  isSelected?: boolean,
}>`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 8px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.toggleBorder : "none"};
  border-radius: 6px;
  transition: background-color 0.3s;

  &:hover {
    border-radius: 6px;
    transition: background-color 0.3s;
    background-color: #333333;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ArrowButton = styled.a`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const StyledHr = styled.hr`
  border: 1px solid #d3d3d369;
`;