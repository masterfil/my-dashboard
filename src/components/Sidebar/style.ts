import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionStyled = styled.section`
  padding: 20px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  /* grid-column: 1 / 2;
    grid-row: 1 / 3; */
  grid-area: sidebar;
  padding: 2rem;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  cursor: pointer;
  margin-bottom: 4px;
`;

export const ListLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.8rem 1rem;

  &:hover {
    border-radius: 6px;
    transition: background-color 0.3s;
    background-color: ${({theme}) => theme.toggleBorder};
  }

  &:focus {
    background-color: ${({theme}) => theme.toggleBorder};
    border-radius: 6px;
    transition: background-color 0.3s;
  }
`;
