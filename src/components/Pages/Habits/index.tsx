import { useEffect, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { HabitTable } from "./HabitTable";
import HabitForm from "./HabitForm";
import { HabitList } from "./HabitList";
import { useMonthDays } from "../../../hooks/useMonthDays";
import { Wrapper } from "./style";

export interface Task {
  id: number;
  title: string;
  day: number;
  isCompleted: boolean;
}

export interface TaskCollection {
  [key: string]: Task[];
}

export interface Habits {
  name: string;
  isEditing: boolean;
}

const habitsMock = [
  { name: "Habit 1", isEditing: false },
  { name: "Habit 2", isEditing: false },
];

export const HabitsTracker = () => {
  const [habits, setHabits] = useState<Habits[]>(habitsMock);
  const [inputValue, setInputValue] = useState("");
  const [trackHabits, setTrackHabits] = useState<TaskCollection>({});
  const { day, days } = useMonthDays();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setHabits([...habits, { name: inputValue, isEditing: false }]);
      e.currentTarget.reset();
    }
  };

  const handleCheckboxClick = (habitName: string, habitDay: number) => {
    setTrackHabits((prevTrackHabits) => {
      const updatedTrackHabits = { ...prevTrackHabits };
      updatedTrackHabits[habitName] = updatedTrackHabits[habitName].map(
        (habit) =>
          habit.day === habitDay
            ? { ...habit, isCompleted: !habit.isCompleted }
            : habit
      );
      return updatedTrackHabits;
    });
  };

  const handleDeleteHabit = (habitName: string) => {
    setHabits((prevState) =>
      prevState.filter((habit) => habit.name !== habitName)
    );
  };

  const handleEditHabit = (habitName: string, newHabitName: string) => {
    setHabits((prevState) =>
      prevState.map((habit) => {
        return habit.name === habitName
          ? {
              ...habit,
              name: newHabitName || habitName,
              isEditing: !habit.isEditing,
            }
          : habit;
      })
    );
  };

  useEffect(() => {
    const habitsList: TaskCollection = {};

    habits.forEach((habit) => {
      const habitTasks: Task[] = days.map((day) => ({
        id: day,
        title: habit.name,
        day,
        isCompleted: false,
      }));
      habitsList[habit.name] = habitTasks;
    });

    setTrackHabits(habitsList);
    console.log(trackHabits, "trackHabits");
    
  }, [days, habits]);

  return (
    <BaseContainer>
      <Wrapper>
        <TitlePage>Habit Tracker</TitlePage>
        <HabitForm handleChange={handleChange} handleSubmit={addHabit} />
        <HabitList
          habits={habits}
          handleDeleteHabit={handleDeleteHabit}
          handleEditHabit={handleEditHabit}
        />
      </Wrapper>
      <HabitTable
        habits={habits}
        days={days}
        // habitsList={trackHabits}
        handleCheckboxClick={handleCheckboxClick}
        currentDay={day}
      />
    </BaseContainer>
  );
};
