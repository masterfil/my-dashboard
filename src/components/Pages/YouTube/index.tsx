import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { YouTubePlayer } from "./YouTube";

export const Youtube = () => {
  return (
    <BaseContainer>
      <TitlePage>YouTube</TitlePage>
      <YouTubePlayer></YouTubePlayer>
    </BaseContainer>
  );
};
