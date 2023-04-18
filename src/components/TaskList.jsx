import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (!tasks.length) return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>;

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        // Por cada vez que se recorra este arreglo, va a generar un componente TaskCard
        // y le va a pasar una tarea 😉
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
