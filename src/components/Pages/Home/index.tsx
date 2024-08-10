import { CurrentWeather } from "../Weather/CurrentWeather";
import { Todos } from "../Todo/Todos";
import { GridBox, GridContainer, StyledGridBox } from "./styles";
import { Timer } from "../Pomodoro/Timer";

export const Home = () => {
  return (
    <GridContainer>
      <GridBox>
        <CurrentWeather />
      </GridBox>
      <GridBox>
        <Timer />
      </GridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
      <GridBox>
        <Todos />
      </GridBox>
      <StyledGridBox>
        <iframe
          // style={{ borderRadius: "0px" }}
          src="https://open.spotify.com/embed/playlist/67njJLn7rz22ZgR3RDYkJE?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </StyledGridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
    </GridContainer>
  );
};
