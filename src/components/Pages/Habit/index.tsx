import { SetStateAction, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { HabitTable } from "./HabitTable";
import HabitForm from "./HabitForm";
import useMonthDays from "../../Utils";
import { v4 as uuidv4 } from 'uuid'

export interface Habits {
  name: string
  id: string
}

const habitsMock: Habits[] = [
  { id: '0', name: 'Days' },
  { id: '1', name: 'Drink water' },
  { id: '2', name: 'No Smoke' },
  { id: '3', name: 'Run' },
];

console.log(habitsMock, 'habitsMock');

export const HabitTracker = () => {
  const [habits, setHabits] = useState<Habits[]>(habitsMock)
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    console.log("🚀 ~ handleChange ~ e.target.value:", e.target.value)
    setInputValue(e.target.value)
  }

  const addHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("🚀 ~ TodosList ~ inputValue:", inputValue)
    if (inputValue.trim() !== '') {
      setHabits([...habits, { id: uuidv4(), name: inputValue }])
      setInputValue('')
      e.currentTarget.reset();
    }
  }

  const numberOfDays = useMonthDays();
  console.log(numberOfDays);

  return (
    <BaseContainer>
      <TitlePage>Habit Tracker</TitlePage>
      <HabitForm handleChange={handleChange} handleSubmit={addHabit} />
      <HabitTable habits={habits} numberOfDays={numberOfDays}/>
    </BaseContainer>
  );
};


