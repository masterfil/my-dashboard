import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AirIcon,
  ExploreIcon,
  KeyboardDoubleArrowDownIcon,
  KeyboardDoubleArrowUpIcon,
  RoomIcon,
  WaterDropIcon,
} from "../../Icons";
import { weatherIcons, WeatherIcons } from "../../../utils/weatherIconsMap";
import { Text } from "../../Common/Typography";
export interface CurrentWeatherProps {
  showMoreInfo?: boolean;
}

export interface WeatherData {
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface Location {
  latitude: number;
  longitude: number;
}

export const TempCotainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Temp = styled.p`
  font-size: 4.5rem;
`;

export const TempText = styled.p`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 6px;
`;

export const TempWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* flex-direction: column; */
`;

export const TempInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 1rem;
  gap: 2px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CurrentWeather = ({ showMoreInfo = false }) => {
  const API_KEY_OPEN_WEATHER = import.meta.env.VITE_OPEN_WEATHER;
  const [location, setLocation] = useState<Location | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const iconCode = weather?.weather[0].icon as WeatherIcons;
  const IconComponent = weatherIcons[iconCode];

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      console.log(position, "position");
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    };

    const error = () => {
      console.log("Unable to retrieve your location");
    };

    // Optional
    // const options = {
    //   enableHighAccuracy: true,
    //   timeout: 10000,
    // };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    if (location) {
      // Make API call to OpenWeatherMap - Current Weather Data
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY_OPEN_WEATHER}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "Current Weather Data");
          setWeather(data);
        })
        .catch((error) => console.log(error));
    }
  }, [location]); // This effect runs whenever location changes

  return (
    <TempCotainer>
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <>
          <HeaderContainer>
            <RoomIcon />
            <h2>{weather.name}</h2>
          </HeaderContainer>
          <TempWrapper>
            <Temp>{`${Math.floor(weather.main.temp)}°C`}</Temp>
            {IconComponent}
            {/* <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt="icon weather"
              /> */}
          </TempWrapper>
          <TempText>Weather {weather.weather[0].description}</TempText>
          <TempInfoContainer>
            <TempText>
              <KeyboardDoubleArrowUpIcon sx={{ height: 22, width: 22 }} />
              <Text>Max {weather.main.temp_max} °C</Text>
            </TempText>
            <TempText>
              <KeyboardDoubleArrowDownIcon sx={{ height: 22, width: 22 }} />
              <Text>Min {weather.main.temp_min} °C</Text>
            </TempText>
            <TempText>
              <AirIcon sx={{ height: 22, width: 22 }} />
              <Text>Wind {weather.wind.speed} km/h</Text>
            </TempText>
            <TempText>
              <WaterDropIcon sx={{ height: 22, width: 22 }} />
              <Text>Humidity {weather.main.humidity}%</Text>
            </TempText>
            {showMoreInfo && (
              <>
                <TempText>
                  <ExploreIcon sx={{ height: 22, width: 22 }} />
                  <Text>Lat {weather.coord.lat}</Text>
                </TempText>
                <TempText>
                  <ExploreIcon sx={{ height: 22, width: 22 }} />
                  <Text>Lon {weather.coord.lon}</Text>
                </TempText>
              </>
            )}
          </TempInfoContainer>
        </>
      ) : null}
    </TempCotainer>
  );
};
