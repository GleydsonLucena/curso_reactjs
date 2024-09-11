import { useReducer, useState } from "react";
import "../styles/global.sass";

const HookUseReducer = () => {
  // Comecando com useReducer
  const [number, dispatch] = useReducer((state) => {
    return Math.random(state);
  });

  const initialTask = [
    { id: 1, text: "Fazer uma tarefa" },
    { id: 2, text: "Fazer outra tarefa" },
  ];

  const tasksReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, { id: state.length + 1, text: action.payload }];

      case "DELETE":
        return state.filter((task) => task.id !== action.payload);

      default:
        return state;
    }
  };

  const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTask);
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD", payload: taskText });
    setTaskText("");
  };

  return (
    <>
      <h1>useReducer</h1>
      <p>Número: {number}</p>
      <button onClick={() => dispatch(1)}>Alterar número</button>

      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p>{task.text}</p>
          <button
            onClick={() => dispatchTasks({ type: "DELETE", payload: task.id })}
          >
            Deletar
          </button>
        </div>
      ))}
    </>
  );
};

export default HookUseReducer;
