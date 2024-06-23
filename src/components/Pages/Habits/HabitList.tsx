import React from "react";
import { TextTodo, TodoActionsWrapper } from "../Todo/style";
import { DeleteIcon, EditIcon } from "../../Icons";
import { Habits } from ".";
import { EditHabit } from "./EditHabit";
import { ListHabit } from "./style";

interface HabitListProps {
  habits: Habits[];
  handleDeleteHabit: (habitName: string) => void;
  handleEditHabit: (habitName: string, newHabitName: string) => void;
  // calculateHabitCompleted: (habitName: string) => void;
}

export const HabitList: React.FC<HabitListProps> = ({
  habits,
  handleDeleteHabit,
  handleEditHabit,
  // calculateHabitCompleted
}) => {
  return (
    <ul>
      {habits.map((habit, index) => (
        <ListHabit key={index}>
          {habit.isEditing ? (
            <EditHabit handleEditHabit={handleEditHabit} habit={habit} />
          ) : (
            <>
            {/* TODO: improve name component */}
              <TextTodo isChecked={false}>{habit.name}</TextTodo>
              <TodoActionsWrapper>
                <EditIcon
                  sx={{ height: 20, width: 20 }}
                  onClick={() => handleEditHabit(habit.name, habit.name)}
                />
                <DeleteIcon
                  sx={{ height: 20, width: 20 }}
                  onClick={() => handleDeleteHabit(habit.name)}
                />
              </TodoActionsWrapper>
            </>
          )}
        </ListHabit>
      ))}
    </ul>
  );
};
