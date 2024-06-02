
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { TodosList } from "./components/Pages/Todo";
import { Habit } from "./components/Pages/Habit";
import { Calendar } from "./components/Pages/Calendar";
import { Notes } from "./components/Pages/Notes";
import { Layout } from "./components/Layout";
import { Theme } from "./hooks/useDarkMode";

interface RoutesAppProps {
  theme: Theme
  toggleTheme: () => void
}

export const RoutesApp: React.FC<RoutesAppProps> = ({ theme, toggleTheme }) => {
  return (
    <Routes>
      <Route element={
        <Layout
          toggleTheme={toggleTheme}
          theme={theme}
        />
      }>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodosList />} />
        <Route path="/habit" element={<Habit />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  )
}
