import styled from "styled-components";
import { BaseContainer, ContentWrapper } from "../../Common/BaseContainer";

const StyledBaseContainer = styled(BaseContainer)`
  ${ContentWrapper} {
    padding: 0 0;
  }
`;

export const Spotify = () => {
  return (
    <StyledBaseContainer>
      <iframe
        // style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/67njJLn7rz22ZgR3RDYkJE?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </StyledBaseContainer>
  );
};
