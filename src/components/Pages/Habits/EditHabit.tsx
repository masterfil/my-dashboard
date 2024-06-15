import { useState } from "react";
import { Habits } from ".";
import { EditForm } from "../../Common/EditForm";

interface EditHabitProps {
  habit: Habits;
  handleEditHabit: (value: string) => void;
}

export const EditHabit: React.FC<EditHabitProps> = ({habit, handleEditHabit}) => {

  const [value, setValue] = useState(habit.name)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleEditHabit(habit.name);
    setValue("");
  };

  return (
    <EditForm handleSubmit={handleSubmit} value={value} setValue={setValue} />
  );
};

