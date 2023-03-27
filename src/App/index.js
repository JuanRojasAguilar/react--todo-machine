import React from "react";

import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
