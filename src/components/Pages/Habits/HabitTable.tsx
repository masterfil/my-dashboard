import { Habits, TaskCollection, } from ".";
import { TableHeader, TableRow, TableStyled } from "./style";

interface HabitTableProps {
  habits: Habits[];
  days: number[];
  habitsList: TaskCollection;
  handleCheckboxClick: (habitName: string, dayIndex: number) => void
}
// TODO: Improve habit table
export const HabitTable: React.FC<HabitTableProps> = ({ habits, days, habitsList, handleCheckboxClick
  // handleClick 
}) => {
  return (
    <TableStyled>
      <thead>
        <TableRow>
          <TableHeader>Days</TableHeader>
          {habits.map((habit, index) => {
            return (
              <TableHeader key={index}>{habit.name}</TableHeader>
            )
          }
          )}
        </TableRow>
      </thead>
      <tbody>
        {days.map((day, index) => (
          <TableRow key={index}>
            <td>{day}</td>
            {habits.map((habit, habitIndex) => (
              <td key={habitIndex}>
                <input
                  type="checkbox"
                  name={`checkbox-${index}-${habitIndex}`}
                  // checked={habitsList[habit]?.[index].isCompleted}
                  onClick={() => handleCheckboxClick(habit.name, day)}
                  readOnly
                />
              </td>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableStyled>
  )
}