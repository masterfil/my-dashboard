import { useLocation } from "react-router-dom";
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from "../Icons";
import { sidebarData } from "./data";
import {
  ListItem,
  SectionStyled,
  UnorderedList,
  ListLink,
  BottomContainer,
  ArrowButton,
  StyledHr,
} from "./style";
import { TextSideBar } from "../Common/Typography";
interface SideBarProps {
  handleClick: () => void;
  showName: boolean;
}

export const Sidebar: React.FC<SideBarProps> = ({ handleClick, showName }) => {
  const location = useLocation();
  const currentPage = location.pathname;

  const isSelected = (path: string) => {
    return currentPage === path;
  };

  return (
    <SectionStyled>
      <UnorderedList>
        {sidebarData.map((item) => (
          <ListItem key={item.id}>
            <ListLink to={item.path} isSelected={isSelected(item.path)}>
              <>
                {item.icon}
                <TextSideBar weight="500" showName={showName}>
                  {item.name}
                </TextSideBar>
              </>
            </ListLink>
          </ListItem>
        ))}
      </UnorderedList>
      <BottomContainer>
        <StyledHr />
        <ArrowButton onClick={handleClick} showName={showName}>
          {showName && <KeyboardArrowRightIcon sx={{ height: 20, width: 20 }}/>}
          {!showName && <KeyboardArrowLeftIcon sx={{ height: 20, width: 20 }}/>}
        </ArrowButton>
      </BottomContainer>
    </SectionStyled>
  );
};
