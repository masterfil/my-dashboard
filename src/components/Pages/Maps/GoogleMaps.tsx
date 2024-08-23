import { useEffect, useState } from "react";

export interface Location {
  latitude: number;
  longitude: number;
}

export const GoogleMaps = () => {
  const [location, setLocation] = useState<Location | null>(null);

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

  const lat = location?.latitude;
  const lon = location?.longitude;
  const position = `${lat}, ${lon}`;

  return (
    <iframe
      width="100%"
      height="100%"
      frameBorder="0"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBxytAfkznZRA4NYh_E2E6apQKHu1kCyAk&q=${position}`}
      allowFullScreen
      style={{ borderRadius: "10px" }}
    ></iframe>
  );
};
