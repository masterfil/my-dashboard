import { SetStateAction, useState } from "react";
import { TitlePage } from "../../Common/Typography";
import { FormTodo } from "./FormTodo";
import { TodoList } from "./TodoList";
import { ActionButtonsWrapper, TodoContainer } from "./style";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../Common/Button";

export interface Todos {
  id: string;
  text: string;
  isChecked: boolean;
  isEditing: boolean;
}

export const Todos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [todosCompleted, setTodosCompleted] = useState<Todos[]>([]);
  const [todosNotCompleted, setTodosNotCompleted] = useState<Todos[]>([]);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: uuidv4(), text: inputValue, isChecked: false, isEditing: false },
      ]);
      e.currentTarget.reset();
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo: Todos) => todo.id !== id));
  };

  const editTodo = (value: string, id: string) => {
    setTodos(
      todos.map((todo: Todos) =>
        todo.id === id
          ? { ...todo, text: value, isEditing: !todo.isEditing }
          : { ...todo }
      )
    );
  };

  const toggleChecked = (id: string) => {
    setTodos(
      todos.map((todo: Todos) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : { ...todo }
      )
    );
  };

  const todoCompleted = todos.filter((todo) => todo.isChecked === true);
  const todoNotCompleted = todos.filter((todo) => todo.isChecked === false);
  const allTodos = [...todosCompleted, ...todosNotCompleted];

  const filterTodoCompleted = () => {
    setTodosCompleted(todoCompleted);
  };

  const filterTodoNotCompleted = () => {
    setTodosNotCompleted(todoNotCompleted);
  };

  const showAllTodos = () => {
    setTodos(allTodos);
  };

  return (
    <TodoContainer>
      <TitlePage>Get Shit Done!</TitlePage>
      <ActionButtonsWrapper>
        <Button
          onClick={filterTodoCompleted}
        >{`Completed ${todoCompleted.length}`}</Button>
        <Button
          onClick={filterTodoNotCompleted}
        >{`Not completed ${todoNotCompleted.length}`}</Button>
        <Button onClick={showAllTodos}>{`All todos ${allTodos.length}`}</Button>
      </ActionButtonsWrapper>

      <FormTodo handleSubmit={addTodo} handleChange={handleChange} />
      <TodoList
        todos={todos}
        toggleChecked={toggleChecked}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </TodoContainer>
  );
};
