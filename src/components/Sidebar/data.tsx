import { AssignmentIndIcon, CalendarMonthIcon, DescriptionIcon, FormatListBulletedIcon, SpaceDashboardIcon, TimerIcon } from "../Icons";

type SidebarItem = {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element;
}[]

export const sidebarData: SidebarItem = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <SpaceDashboardIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 2,
    name: "Todo List",
    path: "/todo",
    icon: <FormatListBulletedIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 3,
    name: "Habit Tracker",
    path: "/habit",
    icon: <AssignmentIndIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 4,
    name: "Calendar",
    path: "/calendar",
    icon: <CalendarMonthIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 5,
    name: "Notes",
    path: "/notes",
    icon: <DescriptionIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 5,
    name: "Pomodoro",
    path: "/pomodoro",
    icon: <TimerIcon sx={{ height: 20, width: 20 }}/>,
  },

]

