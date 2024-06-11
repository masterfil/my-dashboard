import { SetStateAction, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { HabitTable } from "./HabitTable";
import HabitForm from "./HabitForm";
import { HabitList } from "./HabitList";
import useMonthDays from "../../../hooks/useMonthDays";

export interface HabitList {
  day: number
  completed: boolean
}

export interface Habits {
  name: string
  // habitList: HabitList
}

export interface HabitsList {
  day: number
  name: string
  completed: boolean
}

const habitsMock: Habits[] = [
  { name: 'Drink water', },
  { name: 'No Smoke', },
];

export const HabitTracker = () => {
  const [habits, setHabits] = useState<Habits[]>(habitsMock)
  const [inputValue, setInputValue] = useState('')
  // const [trackHabits, setTrackHabits] = useState<Habits[]>([])

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    console.log("🚀 ~ handleChange ~ e.target.value:", e.target.value)
    setInputValue(e.target.value)
  }

  const addHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("🚀 ~ TodosList ~ inputValue:", inputValue)
    if (inputValue.trim() !== '') {
      setHabits([...habits, { name: inputValue }])
      setInputValue('')
      e.currentTarget.reset();
    }
  }

  // const handleClick = (id: number) => {
  // }

  const days = useMonthDays();

  console.log(days);
  console.log(habits, 'habits');

  return (
    <BaseContainer>
      <TitlePage>Habit Tracker</TitlePage>
      <HabitForm handleChange={handleChange} handleSubmit={addHabit} />
      <HabitList habits={habits} />
      <HabitTable habits={habits} days={days}
      // handleClick={handleClick}
      />
    </BaseContainer>
  );
};


