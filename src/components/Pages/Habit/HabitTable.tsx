import { Habits } from ".";
import { TableHeader, TableRow, TableStyled } from "./style";

interface HabitTableProps {
  habits: Habits[];
  numberOfDays: number[];
}

export const HabitTable: React.FC<HabitTableProps> = ({ habits, numberOfDays }) => {
  return (
    <TableStyled>
      <thead>
        <TableRow>
          {habits.map((habit) => {
            console.log(habit.id);
            return (
              <TableHeader key={habit.id}>{habit.name}</TableHeader>
            )
          }
          )}
        </TableRow>
      </thead>
      <tbody>
        {numberOfDays.map((day, dayIndex) =>
          <TableRow key={dayIndex}>
            {habits.map((habit, habitIndex) =>
              <td key={`${habit.id}-${dayIndex}`}>
                {habitIndex === 0 ? <p>{day}</p> : <input type="checkbox" name="checkbox" />}
              </td>
            )}
          </TableRow>
        )}
      </tbody>
    </TableStyled>
  )
}