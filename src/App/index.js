import React from "react";

import { ChangeAlert } from "../ChangeAlert";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { useTodos } from "./useTodos";

function App() {
  const { states, stateUpdaters } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = states;

  const {
    completedTodos,
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
