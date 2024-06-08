import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SectionStyled = styled.section`
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    /* grid-column: 1 / 2;
    grid-row: 1 / 3; */
    grid-area: sidebar;
    padding: 2rem;
`

export const UnorderedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const ListItem = styled.li`
    padding: .8rem 1rem;
    cursor: pointer;
    &:hover {
        background-color: #2f3237;
        border-radius: 6px;
        transition: background-color .3s;
    }
`

export const ListLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
`