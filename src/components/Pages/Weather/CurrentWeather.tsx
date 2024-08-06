import { useEffect, useState } from "react";
import styled from "styled-components";
import { RoomIcon } from "../../Icons";
import { weatherIcons, WeatherIcons } from "../../../utils/weatherIconsMap";

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

export const Temp = styled.h3`
  font-size: 4.5rem;
`;

export const TempText = styled.p``;

export const TempWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TempInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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
            {IconComponent}
            <Temp>{`${Math.floor(weather.main.temp)}°C`}</Temp>
            <TempText>Weather {weather.weather[0].description}</TempText>
            {/* <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt="icon weather"
            /> */}
          </TempWrapper>

          <TempInfoContainer>
            <TempText>Max {weather.main.temp_max} °C</TempText>
            <TempText>Min {weather.main.temp_min} °C</TempText>
            <TempText>Wind {weather.wind.speed} km/h</TempText>
            <TempText>Humidity {weather.main.humidity}%</TempText>
            {showMoreInfo && (
              <>
                <TempText>Lat {weather.coord.lat}</TempText>
                <TempText>Lon {weather.coord.lon}</TempText>
                <TempText>Location {weather.name}</TempText>
                <TempText>Temperature {weather.main.temp} °C</TempText>
                <TempText>Weather {weather.weather[0].description}</TempText>
                <TempText>Humidity {weather.main.humidity}%</TempText>
                <TempText>Max {weather.main.temp_max} °C</TempText>
                <TempText>Min {weather.main.temp_min} °C</TempText>
                <TempText>Wind {weather.wind.speed} km/h</TempText>
              </>
            )}
          </TempInfoContainer>
        </>
      ) : null}
    </TempCotainer>
  );
};
