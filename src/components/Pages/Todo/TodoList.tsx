import { Todos } from "."
import { DisabledText } from "../../Common/Typography"
import { EditTodo } from "./EditTodo"
import { Todo } from "./Todo"
import { ListItemContainer } from "./style"

interface ListItemProps {
    todos: Todos[]
    toggleChecked: (id: string) => void
    deleteTodo: (id: string) => void
    editTodo: (value: string, id: string) => void
}

export const TodoList: React.FC<ListItemProps> = ({ todos, toggleChecked, deleteTodo, editTodo }) => {
    return (
        <ListItemContainer>
            {todos && todos.length ? (
                todos.map(todo =>
                    todo.isEditing ?
                        <EditTodo todo={todo} editTodo={editTodo} />
                        :
                        <Todo key={todo.id} todo={todo} toggleChecked={toggleChecked} deleteTodo={deleteTodo} editTodo={editTodo} isChecked={todo.isChecked}/>
                )) : (<DisabledText>What fuck are you doing?</DisabledText>)
            }
        </ListItemContainer>
    )
}