import { useLocation } from "react-router-dom";
import { KeyboardArrowRightIcon } from "../Icons";
import { sidebarData } from "./data";
import { ListItem, SectionStyled, UnorderedList, ListLink, BottomContainer, ArrowButton, StyledHr } from "./style";

export const Sidebar = () => {
  const location = useLocation();
  const currentPage = location.pathname

  const isSelected = (path: string) => {
    return currentPage === path
  }

  return (
    <SectionStyled>
      <UnorderedList>
        {sidebarData.map((item) => (
          <ListItem key={item.id}>
            <ListLink to={item.path} isSelected={isSelected(item.path)}>
              {item.icon}
              <>{item.name}</>
            </ListLink>
          </ListItem>
        ))}
      </UnorderedList>
      <BottomContainer>
        <StyledHr />
        <ArrowButton>
          <KeyboardArrowRightIcon />
        </ArrowButton>
      </BottomContainer>
    </SectionStyled>
  );
};
