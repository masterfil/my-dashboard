import { BaseContainer } from "../../Common/BaseContainer";
import { HourlyForecast } from "./HourlyForecast";
import { TitlePage } from "../../Common/Typography";
import { CurrentWeather } from "./CurrentWeather";

export const Weather = () => {
  return (
    <BaseContainer>
      <TitlePage>Weather</TitlePage>
      <CurrentWeather showMoreInfo/>
      <HourlyForecast />
    </BaseContainer>
  );
};
