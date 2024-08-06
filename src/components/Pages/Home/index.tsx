import styled from "styled-components";
import { CurrentWeather } from "../Weather/CurrentWeather";

const GridContainer = styled.div`
  padding: 0.8rem;
  transition: all 0.1s linear;
  background-color: ${({ theme }) => theme.background};
  color: #fff;
  /* grid-column: 2 / 3;
    grid-row: 2 / 3; */
  display: grid;
  grid-area: main;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "c1 c2 c3"
    "c4 c4 c5"
    "c4 c4 c6";
  gap: 0.8rem;

  @media (max-width: 925px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 200px);
    grid-template-areas: initial;
  }
`;

const GridBox = styled.div`
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  padding: 1.2rem 1.5rem;

  &:nth-child(1) {
    grid-area: c1;
  }

  &:nth-child(2) {
    grid-area: c2;
  }

  &:nth-child(3) {
    grid-area: c3;
  }

  &:nth-child(4) {
    grid-area: c4;
  }

  &:nth-child(5) {
    grid-area: c5;
  }

  &:nth-child(6) {
    grid-area: c6;
  }

  @media (max-width: 925px) {
    grid-area: initial !important;
  }
`;

export const Home = () => {
  return (
    <GridContainer>
      <GridBox>
        <CurrentWeather />
      </GridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
      <GridBox></GridBox>
      <div>
        <iframe
          style={{ borderRadius: "10px" }}
          src="https://open.spotify.com/embed/playlist/67njJLn7rz22ZgR3RDYkJE?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </GridContainer>
  );
};
