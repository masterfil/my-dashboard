import { sidebarData } from "./data";
import { ListItem, SectionStyled, UnorderedList, ListLink } from "./style";

export const Sidebar = () => {

  return (
    <SectionStyled>
      <UnorderedList>
        {sidebarData.map((item) => (
          <ListItem key={item.id}>
            <ListLink to={item.path}>
              {item.icon}
              <span>{item.name}</span>
            </ListLink>
          </ListItem>
        ))}
      </UnorderedList>
    </SectionStyled>
  );
};
