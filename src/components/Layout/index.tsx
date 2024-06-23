import { NavBar } from '../NavBar'
import { Sidebar } from '../Sidebar'
import { Main } from '../Main'
import { styled } from 'styled-components'
import { Theme } from '../../hooks/useDarkMode'

interface LayoutProps {
    theme: Theme
    toggleTheme: () => void
}

const DashboardContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas: 
    "sidebar header"
    "sidebar main";
`

export const Layout: React.FC<LayoutProps> = ({theme, toggleTheme}) => {
    return (
        <DashboardContainer>
            <NavBar theme={theme} toggleTheme={toggleTheme}/>
            <Sidebar />
            <Main />
        </DashboardContainer>
    )
}

