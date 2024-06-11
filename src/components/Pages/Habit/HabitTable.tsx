import { Habits } from ".";
import { TableHeader, TableRow, TableStyled } from "./style";

interface HabitTableProps {
  habits: Habits[];
  days: number[];
  // handleClick: (id: string) => void;
}
// TODO: Improve habit table
export const HabitTable: React.FC<HabitTableProps> = ({ habits, days,
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
              <TableHeader key={index}>{habit.name}</TableHeader>
            )
          }
          )}
        </TableRow>
      </thead>
      <tbody>
        {/* {days.map((day, dayIndex) =>
          <TableRow key={dayIndex}>
            {habits.map((_, habitIndex) =>
              <td key={`${habitIndex}-${dayIndex}`}>
                {habitIndex === 0 ? <p>{day}</p> : <input type="checkbox" name="checkbox"
                // onClick={() => handleClick(dayIndex)} 
                />}
              </td>
            )}
          </TableRow>
        )} */}
        {days.map((_, index) => {

          return (
            <TableRow key={index}>
              <td>
                {index}
              </td>
            </TableRow>
          )
        })}

      </tbody>
    </TableStyled>
  )
}