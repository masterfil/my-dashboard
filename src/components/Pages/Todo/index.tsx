import { SetStateAction, useState } from "react"
import { BaseContainer } from "../../Common/BaseContainer"
import { TitlePage } from "../../Common/Typography"
import { FormTodo } from "./FormTodo"
import { TodoList } from "./TodoList"
import { TextWrapper, TodoContainer } from "./style"
import { v4 as uuidv4 } from 'uuid'

export interface Todos {
  id: string
  text: string
  isChecked: boolean
  isEditing: boolean
}

export const TodosList = () => {
  const [todos, setTodos] = useState<Todos[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    console.log("🚀 ~ handleChange ~ e.target.value:", e.target.value)
    setInputValue(e.target.value)
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("🚀 ~ TodosList ~ inputValue:", inputValue)
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: uuidv4(), text: inputValue, isChecked: false, isEditing: false }])
      setInputValue('')
      e.currentTarget.reset();
    }
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo: Todos) => todo.id !== id))
  }

  const editTodo = (value: string, id: string) => {
    setTodos(todos.map((todo: Todos) => todo.id === id ? { ...todo, text: value, isEditing: !todo.isEditing } : { ...todo }))
  }

  const toggleChecked = (id: string) => {
    setTodos(todos.map((todo: Todos) => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : { ...todo }))
  }

  const todoCompleted = todos.filter(todo => todo.isChecked === true).length
  const todoNotCompleted = todos.filter(todo => todo.isChecked === false).length

  return (
    <BaseContainer>
      <TodoContainer>
        <TitlePage>Get Shit Done!</TitlePage>
        <TextWrapper>
          <p>Completed: {todoCompleted}</p>
          <p>Not completed: {todoNotCompleted}</p>
        </TextWrapper>
        <FormTodo handleSubmit={addTodo} handleChange={handleChange} />
        <TodoList todos={todos} toggleChecked={toggleChecked} deleteTodo={deleteTodo} editTodo={editTodo} />
      </TodoContainer>
    </BaseContainer>
  )
}
