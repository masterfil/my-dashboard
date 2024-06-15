import { useEffect, useState } from "react";
import { BaseContainer } from "../../Common/BaseContainer";
import { TitlePage } from "../../Common/Typography";
import { HabitTable } from "./HabitTable";
import HabitForm from "./HabitForm";
import { HabitList } from "./HabitList";
import { useMonthDays } from "../../../hooks/useMonthDays";
import { Wrapper } from "./style";

export interface HabitList {
  day: number;
  completed: boolean;
}
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
  { name: "Drink water", isEditing: false },
  { name: "No Smoke", isEditing: false },
];

export const HabitsTracker = () => {
  const [habits, setHabits] = useState<Habits[]>(habitsMock);
  const [inputValue, setInputValue] = useState("");
  const [trackHabits, setTrackHabits] = useState<TaskCollection>({});
  const days = useMonthDays();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("🚀 ~ handleChange ~ e.target.value:", e.target.value);
    setInputValue(e.target.value);
  };

  const addHabit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("🚀 ~ TodosList ~ inputValue:", inputValue);
    if (inputValue.trim() !== "") {
      setHabits([...habits, { name: inputValue, isEditing: false }]);
      e.currentTarget.reset();
    }
  };

  const handleCheckboxClick = (habitName: string, habitDay: number) => {
    trackHabits[habitName].map((habit) => {
      if (habit.day === habitDay) {
        habit.isCompleted = !habit.isCompleted;
        console.log(trackHabits, "trackHabits");
      }
    });
  };

  const handleDeleteHabit = (habitName: string) => {
    setHabits((prevState) =>
      prevState.filter((habit) => habit.name !== habitName)
    );
    console.log(habitName, "habitName");
  };

  const handleEditHabit = (habitName: string) => {
    console.log(habitName, "habitName");
  };

  // const calculateHabitCompleted = (habitName: string) => {
  //   const habit = trackHabits[habitName];

  //   if (habit) {
  //     // Check if habit is defined
  //     habit.map((habit) => {
  //       if (habit.isCompleted) {
  //         console.log(habit, "habit");
  //       }
  //     });
  //   } else {
  //     console.log(`Habit with name ${habitName} not found.`);
  //   }
  // };

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

    console.log(habitsList, "habitsList");
    setTrackHabits(habitsList);
  }, [days, habits]);

  console.log(days);
  console.log(habits, "habits");
  console.log(trackHabits, "trackHabits");

  return (
    <BaseContainer>
      <Wrapper>
        <TitlePage>Habit Tracker</TitlePage>
        <HabitForm handleChange={handleChange} handleSubmit={addHabit} />
        <HabitList
          habits={habits}
          handleDeleteHabit={handleDeleteHabit}
          handleEditHabit={handleEditHabit}
          // calculateHabitCompleted={calculateHabitCompleted}
        />
      </Wrapper>
      <HabitTable
        habits={habits}
        days={days}
        habitsList={trackHabits}
        handleCheckboxClick={handleCheckboxClick}
      />
    </BaseContainer>
  );
};
