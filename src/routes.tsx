import { Route, Routes } from "react-router-dom";
import { Spotify } from "./components/Pages/Spotify";
import {
  Calendar,
  HabitsTracker,
  Home,
  Maps,
  Notes,
  PomodoroTimer,
  TodosList,
} from "./components/Pages";
import { Layout } from "./components/Layout";
import { Theme } from "./hooks/useDarkMode";
import { Weather } from "./components/Pages/Weather";
import { News } from "./components/Pages/News";
import { Youtube } from "./components/Pages/YouTube";

interface RoutesAppProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const RoutesApp: React.FC<RoutesAppProps> = ({ theme, toggleTheme }) => {
  return (
    <Routes>
      <Route element={<Layout toggleTheme={toggleTheme} theme={theme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodosList />} />
        <Route path="/habits" element={<HabitsTracker />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/pomodoro" element={<PomodoroTimer />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/youtube" element={<Youtube />} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
};
