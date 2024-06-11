import React from 'react'
import { Habits } from '.'
import { TodoActionsWrapper } from '../Todo/style'
import { DeleteIcon, EditIcon, MoreVertIcon } from '../../Icons'

interface HabitListProps {
    habits: Habits[]
}


export const HabitList: React.FC<HabitListProps> = ({ habits }) => {

    return (
        <ul>
            {habits.map(habit =>
                <li key={habit.id}>{habit.name}
                    <TodoActionsWrapper>
                        <EditIcon sx={{ height: 20, width: 20 }}
                        // onClick={() => editTodo(todo.text, todo.id)} 
                        />
                        <DeleteIcon sx={{ height: 20, width: 20 }}
                        // onClick={() => deleteTodo(todo.id)} 
                        />
                        <MoreVertIcon sx={{ height: 20, width: 20 }} />
                    </TodoActionsWrapper>
                </li>
            )}
        </ul>
    )
}