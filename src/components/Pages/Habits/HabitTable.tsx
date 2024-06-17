import { Habits } from ".";
import { TableHeader, TableRow, TableStyled } from "./style";

interface HabitTableProps {
  habits: Habits[];
  currentDay: number;
  days: number[];
  handleCheckboxClick: (habitName: string, dayIndex: number) => void;
}

export const HabitTable: React.FC<HabitTableProps> = ({
  habits,
  currentDay,
  days,
  handleCheckboxClick,
}) => {
  return (
    <TableStyled>
      <thead>
        <TableRow>
          <TableHeader>Days</TableHeader>
          {habits.map((habit, index) => {
            return <TableHeader key={index}>{habit.name}</TableHeader>;
          })}
        </TableRow>
      </thead>
      <tbody>
        {days.map((day, index) => (
          <TableRow key={index} bgColor={day === currentDay}>
            <td>{day}</td>
            {habits.map((habit, habitIndex) => (
              <td key={habitIndex}>
                <input
                  type="checkbox"
                  name={`checkbox-${index}-${habitIndex}`}
                  onClick={() => handleCheckboxClick(habit.name, day)}
                  readOnly
                />
              </td>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableStyled>
  );
};
