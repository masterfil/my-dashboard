import { useEffect, useState } from "react";
import { Location } from "./CurrentWeather";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

// 5 day / 3 hour forecast data
export const HourlyForecast = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER;

  useEffect(() => {
    const success = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    };

    const error = () => {
      console.log("Unable to retrieve your location");
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    if (location) {
      // Make API call to OpenWeatherMap - 5 day / 3 hour forecast data
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "5 day weather forecast data");
          setWeather(data);
        })
        .catch((error) => console.log(error));
    }
  }, [location]); // This effect runs whenever location changes

  return (
    <div>{location && !weather ? <p>Loading weather data...</p> : null}</div>
  );
};
