import { useEffect, useState } from "react";

export const IpAddress = () => {
  const [ip, setIp] = useState();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Your Public IP Address:", data.ip);
        setIp(data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP:", error);
      });
  }, []);

  return <div>{ip}</div>;
};
