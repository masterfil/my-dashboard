import { SetStateAction, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { HabitTable } from "./HabitTable";
import HabitForm from "./HabitForm";
import useMonthDays from "../../Utils";
import { HabitList } from "./HabitList";

export interface HabitList {
  day: number
  completed: boolean
}

export interface Habits {
  name: string
  habitList: HabitList
}

export interface HabitsList {
  day: number
  name: string
  completed: boolean
}

const habitsMock: Habits[] = [
  {
    name: 'Days', 
    habitList: {
      day: 1,
      completed: false
    }
  },
  { name: 'Drink water', habitList: { day: 0, completed: false } },
  { name: 'No Smoke', habitList: { day: 0, completed: false } },
];

const habitsMockList: HabitsList[] = [
  [
    { day: 1, name: 'habit 1', completed: false },
  ],
  [
    { day: 2, name: 'habit 2', completed: false },
  ],
  [
    { day: 3, name: 'habit 3', completed: false },

  ]
];


console.log(habitsMock, 'habitsMock');

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

  const numberOfDays = useMonthDays();


  console.log(numberOfDays);
  console.log(habits, 'habits');

  return (
    <BaseContainer>
      <TitlePage>Habit Tracker</TitlePage>
      <HabitForm handleChange={handleChange} handleSubmit={addHabit} />
      <HabitList habits={habits} />
      <HabitTable habits={habits} numberOfDays={numberOfDays}
      // handleClick={handleClick}
      />
    </BaseContainer>
  );
};


