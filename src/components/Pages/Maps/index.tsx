import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { GoogleMaps } from "./GoogleMaps";

export const Maps = () => {
    return (
      <BaseContainer>
        <TitlePage>Maps</TitlePage>
        <GoogleMaps />
      </BaseContainer>
    );
  };
  