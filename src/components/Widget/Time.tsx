
import { useState, useEffect } from "react";
import { Text } from "../Common/Typography";

export const Time = () => {
  const currentDate = new Date().toDateString();
  const [time, setTime] = useState(currentDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Text>{time}</Text>
    </>
  );
};
