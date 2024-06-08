
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { TodosList } from "./components/Pages/Todo";
import { Calendar } from "./components/Pages/Calendar";
import { Notes } from "./components/Pages/Notes";
import { Layout } from "./components/Layout";
import { Theme } from "./hooks/useDarkMode";
import { HabitTracker } from "./components/Pages";

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
        <Route path="/habit" element={<HabitTracker />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  )
}
