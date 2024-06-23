import React from 'react'
import { TextTodo, TodoActionsWrapper, TodoInput, TodoItem, TodoWrapper } from './style'
import { DeleteIcon, EditIcon } from '../../Icons'
import { Todos } from '.'

interface TodoItemsProps {
  todo: Todos
  toggleChecked: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (value: string, id: string) => void
  isChecked: boolean
}

export const Todo: React.FC<TodoItemsProps> = ({ todo, toggleChecked, deleteTodo, editTodo, isChecked }) => {
  return (
    <TodoItem isChecked={isChecked}>
      <TodoWrapper>
        <TodoInput type="checkbox" name={todo.text} value={todo.text} checked={todo.isChecked} onClick={() => toggleChecked(todo.id)} />
        <TextTodo isChecked={isChecked}>{todo.text}</TextTodo>
      </TodoWrapper>
      <TodoActionsWrapper>
        <EditIcon sx={{ height: 20, width: 20 }} onClick={() => editTodo(todo.text, todo.id)} />
        <DeleteIcon sx={{ height: 20, width: 20 }} onClick={() => deleteTodo(todo.id)} />
      </TodoActionsWrapper>
    </TodoItem>
  )
}
