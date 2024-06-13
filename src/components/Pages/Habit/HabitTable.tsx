import { TaskCollection, } from ".";
import { TableHeader, TableRow, TableStyled } from "./style";

interface HabitTableProps {
  habits: string[];
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
            console.log(index);
            return (
              <TableHeader key={index}>{habit}</TableHeader>
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
                  onClick={() => handleCheckboxClick(habit, index)}
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