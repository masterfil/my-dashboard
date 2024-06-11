import { Habits } from ".";
import { TableHeader, TableRow, TableStyled } from "./style";

interface HabitTableProps {
  habits: Habits[];
  numberOfDays: number[];
  // handleClick: (id: string) => void;
}

export const HabitTable: React.FC<HabitTableProps> = ({ habits, numberOfDays,
  // handleClick 
}) => {
  return (
    <TableStyled>
      <thead>
        <TableRow>
          {habits.map((habit, index) => {
            console.log(index);
            return (
              <TableHeader key={index}>{habit.name}</TableHeader>
            )
          }
          )}
        </TableRow>
      </thead>
      <tbody>
        {numberOfDays.map((day, dayIndex) =>
          <TableRow key={dayIndex}>
            {habits.map((_, habitIndex) =>
              <td key={`${habitIndex}-${dayIndex}`}>
                {habitIndex === 0 ? <p>{day}</p> : <input type="checkbox" name="checkbox" 
                // onClick={() => handleClick(dayIndex)} 
                />}
              </td>
            )}
          </TableRow>
        )}
      </tbody>
    </TableStyled>
  )
}