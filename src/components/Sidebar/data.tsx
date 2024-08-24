import {
  AudiotrackIcon,
  CalendarMonthIcon,
  CheckBoxIcon,
  DescriptionIcon,
  FeedIcon,
  HomeIcon,
  RoomIcon,
  TimelineIcon,
  TimerIcon,
  WbSunnyIcon,
  YouTubeIcon,
} from "../Icons";

type SidebarItem = {
  id: number;
  name: string;
  path: string;
  icon: JSX.Element;
}[];

export const sidebarData: SidebarItem = [
  {
    id: 0,
    name: "Home",
    path: "/",
    icon: <HomeIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 1,
    name: "Todo List",
    path: "/todo",
    icon: <CheckBoxIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 2,
    name: "Habit Tracker",
    path: "/habits",
    icon: <TimelineIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 3,
    name: "Calendar",
    path: "/calendar",
    icon: <CalendarMonthIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 4,
    name: "Notes",
    path: "/notes",
    icon: <DescriptionIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 5,
    name: "Spotify",
    path: "/spotify",
    icon: <AudiotrackIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 6,
    name: "Pomodoro",
    path: "/pomodoro",
    icon: <TimerIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 7,
    name: "Weather",
    path: "/weather",
    icon: <WbSunnyIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 8,
    name: "News",
    path: "/news",
    icon: <FeedIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 9,
    name: "Maps",
    path: "/maps",
    icon: <RoomIcon sx={{ height: 20, width: 20 }} />,
  },
  {
    id: 10,
    name: "YouTube",
    path: "/youtube",
    icon: <YouTubeIcon sx={{ height: 20, width: 20 }} />,
  },
];
