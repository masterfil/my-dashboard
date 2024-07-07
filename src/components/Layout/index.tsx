import { NavBar } from "../NavBar";
import { Sidebar } from "../Sidebar";
import { Main } from "../Main";
import { Theme } from "../../hooks/useDarkMode";
import { useState } from "react";
import { DashboardContainer } from "./style";

interface LayoutProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ theme, toggleTheme }) => {
  const [toggleSideBar, setToggleSideBar] = useState(true);

  const handleClick = () => {
    setToggleSideBar((s) => !s);
  };

  return (
    <DashboardContainer togglesidebar={toggleSideBar}>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Sidebar handleClick={handleClick} showName={toggleSideBar} />
      <Main />
    </DashboardContainer>
  );
};
