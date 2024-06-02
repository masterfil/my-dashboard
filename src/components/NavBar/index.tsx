import styled from 'styled-components'
import { Time } from '../Widget/Time'
import { CurrentDate } from '../Widget/CurrentDate'
import { AccessTimeIcon, CalendarTodayIcon } from '../Icons'
import { FlexWrapper } from '../Common/commonStyle'
import { DarkModeToggler } from '../DarkMode'
import { Theme } from '../../hooks/useDarkMode'

interface HeaderProps {
  theme: Theme
  toggleTheme: () => void
}

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: .9rem;
    align-items: center;
    padding: 20px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    /* grid-column: 2 / 3;
    grid-row: 1 / 2; */
    grid-area: header;
`

export const NavBar: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <Nav>
      <FlexWrapper>
        <CalendarTodayIcon sx={{ height: 16, width: 16 }} />
        <CurrentDate />
      </FlexWrapper>
      <FlexWrapper>
        <AccessTimeIcon sx={{ height: 16, width: 16 }} />
        <Time />
      </FlexWrapper>
      <DarkModeToggler theme={theme} toggleTheme={toggleTheme} />
    </Nav>
  )
}