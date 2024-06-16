import { useEffect, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";

export const Pomodoro = () => {
  
  const [timer, setTimer] = useState('25');

  console.log(timer, 'timer');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }
  , [timer]);

  return (
    <BaseContainer>
      <TitlePage>Pomodoro Timer</TitlePage>

      <div>
        <h1>{timer}</h1>
      </div>

    </BaseContainer>
  );
};
