import { useEffect, useState } from "react";
import { TitlePage } from "../../Common/Typography";
import {
  ButtonTimer,
  ButtonWrapper,
  Time,
  TimerContainer,
  TomatosContainer,
} from "./style";
import { Text } from "../../Common/Typography/index";
import { GiTomato } from "react-icons/gi";

const INITIAL_TIME = 1500; // 25 minutes
const BREAK_TIME = 300; // 5 minutes

type BtnAction = "start" | "stop" | "reset" | "";

export const Timer = () => {
  const [seconds, setSeconds] = useState(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);
  const [btnActive, setBtnActive] = useState<BtnAction>("");
  const [pomodoroCounter, setPomodoroCounter] = useState(0);

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
      setSeconds(BREAK_TIME);
      setIsActive(false);
      setBtnActive("stop");
      setPomodoroCounter(pomodoroCounter + 1);
    }
  }, [seconds, pomodoroCounter]);

  const toggleTimer = () => {
    setIsActive((prevState) => !prevState);
    setBtnActive("start");
  };

  const stopTimer = () => {
    setIsActive(false);
    setBtnActive("stop");
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(INITIAL_TIME);
    setBtnActive("reset");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  const tomatoCounter = () => {
    return Array.from({ length: pomodoroCounter }, (_, i) => (
      <GiTomato key={i} color="tomato" fontSize={"30px"} />
    ));
  };

  return (
    <>
      <TitlePage>Pomodoro Timer</TitlePage>
      <TimerContainer>
        <Time>{formatTime(seconds)}</Time>
        <ButtonWrapper>
          <ButtonTimer
            onClick={toggleTimer}
            isBtnActive={btnActive === "start"}
          >
            Play
          </ButtonTimer>
          <ButtonTimer onClick={stopTimer} isBtnActive={btnActive === "stop"}>
            Stop
          </ButtonTimer>
          <ButtonTimer onClick={resetTimer} isBtnActive={btnActive === "reset"}>
            Reset
          </ButtonTimer>
        </ButtonWrapper>
        <TomatosContainer>
          <Text>Daily Tomatos counter: {pomodoroCounter}</Text>
          <div>{tomatoCounter()}</div>
        </TomatosContainer>
      </TimerContainer>
    </>
  );
};
