import { Habits } from ".";
import { TodoInput } from "../Todo/style";
import { StyledTable } from "./style";

interface HabitTableProps {
  habits: Habits[];
}

export const HabitTable: React.FC<HabitTableProps> = ({ habits }) => {
  console.log(habits);

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Habit Name</th>
          {habits.length > 0 &&
            Object.keys(habits[0].trackerList).map((day, index) => (
              <th key={index}>{day}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {habits.map((habit, habitIndex) => (
          <tr key={habitIndex}>
            <td>{habit.name}</td>
            {Object.keys(habit.trackerList).map((day, index) => (
              <td key={index}>
                <TodoInput
                  type="checkbox"
                  // name={todo.text}
                  // value={todo.text}
                  checked={habit.trackerList[parseInt(day)].completed}
                  // onClick={() => toggleChecked(todo.id)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
