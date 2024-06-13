import { useEffect, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { HabitTable } from "./HabitTable";
import HabitForm from "./HabitForm";
import { HabitList } from "./HabitList";
import { useMonthDays } from "../../../hooks/useMonthDays";

export interface HabitList {
  day: number
  completed: boolean
}
export interface Task {
  id: number;
  title: string;
  day: number;
  isCompleted: boolean;
}

// index signature
export interface TaskCollection {
  [key: string]: Task[];
}

const habitsMock = [
  'Drink water',
  'No Smoke'
];


export const HabitTracker = () => {
  const [habits, setHabits] = useState<string[]>(habitsMock)
  const [inputValue, setInputValue] = useState('')
  const [trackHabits, setTrackHabits] = useState<TaskCollection>({})
  const days = useMonthDays();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("🚀 ~ handleChange ~ e.target.value:", e.target.value)
    setInputValue(e.target.value)
  }

  const addHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("🚀 ~ TodosList ~ inputValue:", inputValue)
    if (inputValue.trim() !== '') {
      setHabits([...habits, inputValue])
      setInputValue('')
    }
  }


  const handleCheckboxClick = (habitName: string, dayIndex: number) => {
    setTrackHabits(prevState => {
      const updatedHabits = { ...prevState };
      const task = updatedHabits[habitName][dayIndex];
      updatedHabits[habitName][dayIndex] = { ...task, isCompleted: !task.isCompleted };
      console.log(updatedHabits, 'updatedHabits');
      
      return updatedHabits;
    });
  };

  useEffect(() => {
    const habitsList: TaskCollection = {};

    habits.forEach((habit) => {
      const habitTasks: Task[] = days.map((day) => ({
        id: day,
        title: habit,
        day,
        isCompleted: false
      }));
      habitsList[habit] = habitTasks;
    }
    );

    console.log(habitsList, 'habitsList');
    setTrackHabits(habitsList);
  }, [days, habits]);


  console.log(days);
  console.log(habits, 'habits');
  console.log(trackHabits, 'trackHabits');

  return (
    <BaseContainer>
      <TitlePage>Habit Tracker</TitlePage>
      <HabitForm handleChange={handleChange} handleSubmit={addHabit} />
      <HabitList habits={habits} />
      <HabitTable habits={habits} days={days}
        habitsList={trackHabits}
        handleCheckboxClick={handleCheckboxClick}
      />
    </BaseContainer>
  );
};


