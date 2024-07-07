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
import { Text } from "../Common/Typography";

interface SideBarProps {
  handleClick: () => void;
  showName: boolean
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
            <ListLink to={item.path} isSelected={isSelected(item.path)} showName={showName}>
              {item.icon}
              <Text weight="bold">{!showName && item.name}</Text>
            </ListLink>
          </ListItem>
        ))}
      </UnorderedList>
      <BottomContainer>
        <StyledHr />
        <ArrowButton onClick={handleClick}>
          {showName && <KeyboardArrowRightIcon />}
          {!showName && <KeyboardArrowLeftIcon />}
        </ArrowButton>
      </BottomContainer>
    </SectionStyled>
  );
};
