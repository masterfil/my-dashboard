import React from "react";
import { TodoActionsWrapper } from "../Todo/style";
import { DeleteIcon, EditIcon, MoreVertIcon } from "../../Icons";
import { Habits } from ".";
import { EditHabit } from "./EditHabit";
import { ListHabit } from "./style";

interface HabitListProps {
  habits: Habits[];
  handleDeleteHabit: (habitName: string) => void;
  handleEditHabit: (habitName: string) => void;
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
              {habit.name}
              {}
              {/* {calculateHabitCompleted(habit.name)} */}
              <TodoActionsWrapper>
                <EditIcon
                  sx={{ height: 20, width: 20 }}
                  onClick={() => handleEditHabit(habit.name)}
                />
                <DeleteIcon
                  sx={{ height: 20, width: 20 }}
                  onClick={() => handleDeleteHabit(habit.name)}
                />
                <MoreVertIcon sx={{ height: 20, width: 20 }} />
              </TodoActionsWrapper>
            </>
          )}
        </ListHabit>
      ))}
    </ul>
  );
};
