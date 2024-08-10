import styled from "styled-components";
import { BaseContainer, ContentWrapper } from "../../Common/BaseContainer";
import { SpotifyPlaylist } from "./SpotifyPlaylist";

const StyledBaseContainer = styled(BaseContainer)`
  ${ContentWrapper} {
    padding: 0 0;
  }
`;

export const Spotify = () => {
  return (
    <StyledBaseContainer>
      <SpotifyPlaylist />
    </StyledBaseContainer>
  );
};
