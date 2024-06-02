import { ThemeProvider } from 'styled-components';
import './App.css'
import { useDarkMode } from './hooks/useDarkMode';
import { RoutesApp } from './routes'
import { GlobalStyles } from './globalStyle';
import { darkTheme, lightTheme } from './theme';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <RoutesApp theme={theme} toggleTheme={toggleTheme}/>
      </>
    </ThemeProvider>
  )
}

export default App
