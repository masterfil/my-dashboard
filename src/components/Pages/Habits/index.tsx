import { useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import HabitForm from "./HabitForm";
import { HabitTable } from "./HabitTable";
import { useMonthDays } from "../../../hooks/useMonthDays";
import { HabitsContainer } from "./style";

export interface Habits {
  name: string;
  trackerList: { [key: number]: { completed: boolean } };
}

const habitsMock: Habits[] = [
  {
    name: "Habit 1",
    trackerList: {
      1: { completed: true },
      2: { completed: false },
      3: { completed: true },
      4: { completed: false },
      5: { completed: false },
      6: { completed: false },
      7: { completed: false },
      8: { completed: true },
      9: { completed: true },
      10: { completed: false },
      11: { completed: true },
      12: { completed: false },
      13: { completed: false },
      14: { completed: false },
      15: { completed: true },
      16: { completed: false },
      17: { completed: false },
      18: { completed: false },
      19: { completed: false },
      20: { completed: false },
      21: { completed: true },
      22: { completed: false },
      23: { completed: false },
      24: { completed: true },
      25: { completed: false },
      26: { completed: true },
      27: { completed: false },
      28: { completed: true },
      29: { completed: false },
      30: { completed: false },
      31: { completed: false },
    },
  },
  // {
  //   name: "Habit 2",
  //   trackerList: {
  //     1: { completed: false },
  //     2: { completed: true },
  //     3: { completed: true },
  //   },
  // },
];

export const HabitsTracker = () => {
  const [habits, setHabits] = useState<Habits[]>(habitsMock);
  const [inputValue, setInputValue] = useState("");
  const { days } = useMonthDays();

  const habitList: { [key: number]: { completed: boolean } } = days.reduce(
    (acc, day) => {
      return {
        ...acc,
        [day]: { completed: false },
      };
    },
    {}
  );

  console.log(habitList, "habitList");
  console.log(habits, "habits");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setHabits([...habits, { name: inputValue, trackerList: habitList }]);
      e.currentTarget.reset();
    }
  };

  return (
    <BaseContainer>
      <HabitsContainer>
        <TitlePage>Habit Tracker</TitlePage>
        <HabitForm handleChange={handleChange} handleSubmit={addHabit} />
      </HabitsContainer>
      <HabitTable habits={habits} />
    </BaseContainer>
  );
};
