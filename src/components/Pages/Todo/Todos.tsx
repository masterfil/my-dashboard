import { SetStateAction, useEffect, useState } from "react";
import { TitlePage } from "../../Common/Typography";
import { FormTodo } from "./FormTodo";
import { TodoList } from "./TodoList";
import { ActionButtonsWrapper, TodoContainer } from "./style";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../Common/Button";

export interface Todos {
  id: string;
  text: string;
  isComplete: boolean;
  isEditing: boolean;
}

export const Todos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [todosCompleted, setTodosCompleted] = useState<Todos[]>([]);
  const [todosNotCompleted, setTodosNotCompleted] = useState<Todos[]>([]);
  const [todoAction, setTodoAction] = useState("all");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: uuidv4(), text: inputValue, isComplete: false, isEditing: false },
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
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
      )
    );
  };

  const handleClick = (action: string) => {
    setTodoAction(action);
  };

  const renderTodos = () => {
    if (todoAction === "completed") {
      return todosCompleted;
    }
    if (todoAction === "notcompleted") {
      return todosNotCompleted;
    }
    if (todoAction === "all") {
      return todos;
    }
    return todos;
  };

  useEffect(() => {
    if (todoAction === "completed") {
      setTodosCompleted([
        ...todos.filter((todo: Todos) => todo.isComplete === true),
      ]);
    }
    if (todoAction === "notcompleted") {
      setTodosNotCompleted([
        ...todos.filter((todo: Todos) => todo.isComplete === false),
      ]);
    }
  }, [todoAction, todos]);

  return (
    <TodoContainer>
      <TitlePage>Get Shit Done!</TitlePage>
      <ActionButtonsWrapper>
        <Button
          onClick={() => handleClick("completed")}
          isSelected={todoAction === "completed"}
        >{`Completed ${
          todos.filter((todo) => todo.isComplete).length
        }`}</Button>
        <Button
          onClick={() => handleClick("notcompleted")}
          isSelected={todoAction === "notcompleted"}
        >{`Not completed ${
          todos.filter((todo) => todo.isComplete === false).length
        }`}</Button>
        <Button
          onClick={() => handleClick("all")}
          isSelected={todoAction === "all"}
        >{`All todos ${todos.length}`}</Button>
      </ActionButtonsWrapper>

      <FormTodo handleSubmit={addTodo} handleChange={handleChange} />
      <TodoList
        todos={renderTodos()}
        toggleChecked={toggleChecked}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </TodoContainer>
  );
};
