import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); // TaskContext, nombre de mi contexto

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); // Estado inicial, es un array vacío

  /*
  const createTask = (task) => {
  Hacemos una copia de tasks, (quien contiene todas las tareas) y añadele una tarea nueva -> task
    settasks([...tasks, task]);
  };
  */

  // Crear tarea
  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };
  // Eliminar tarea
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Cuando el componente TaskContextProvider es creado, useEffect se va a ejecutar y establecera en tasks, los datos.

  // Esto se va a ejecutar cuando cargue el componente TaskList
  useEffect(() => {
    setTasks(data); // Cuando cargue el componente se va a establecer el siguiente valor. (Modificando así el estado)
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

// Provioder => provee de un estado al resto
