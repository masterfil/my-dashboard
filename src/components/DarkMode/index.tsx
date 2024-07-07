import { styled } from "styled-components"
import { NightlightIcon, WbSunnyIcon } from "../Icons"
import { Theme } from "../../hooks/useDarkMode"

interface DarkModeProps {
  theme: Theme
  toggleTheme: () => void
}

const DarkModeContainer = styled.div`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: color .1s;
  display: flex;
`

export const DarkModeToggler: React.FC<DarkModeProps> = ({ theme, toggleTheme }) => {
  return (
    <DarkModeContainer onClick={toggleTheme}>
      {
        theme === 'light' ?
          <NightlightIcon sx={{ height: 20, width: 20, color: theme }} />
          :
          <WbSunnyIcon sx={{ height: 20, width: 20 }} />
      }
    </DarkModeContainer>
  )
}