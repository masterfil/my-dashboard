import { useEffect, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { Button, ButtonWrapper, Timer, TimerContainer } from "../../Common/commonStyle";

export const Pomodoro = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const [btnActive, setBtnActive] = useState('')

  const toggleTimer = () => {
    setIsActive((prevState) => !prevState);
    setBtnActive('start')
  };

  const stopTimer = () => {
    setIsActive(false);
    setBtnActive('stop')
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(1500);
    setBtnActive('reset')
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isActive]);

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(300);
    }
  }, [seconds]);

  return (
    <BaseContainer>
      <TitlePage>Pomodoro Timer</TitlePage>
      <TimerContainer>
        <Timer>{formatTime(seconds)}</Timer>
        <ButtonWrapper>
          <Button onClick={toggleTimer} isBtnActive={btnActive === 'start'}>Play</Button>
          <Button onClick={stopTimer} isBtnActive={btnActive === 'stop'}>Stop</Button>
          <Button onClick={resetTimer} isBtnActive={btnActive === 'reset'}>Reset</Button>
        </ButtonWrapper>
      </TimerContainer>
    </BaseContainer>
  );
};
