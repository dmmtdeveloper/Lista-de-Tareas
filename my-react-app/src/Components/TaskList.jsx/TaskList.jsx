import { useState } from "react";
import "./TaskList.css";

const TaskList = () => {
  // 01 Crear estados iniciales con un Array de Objeto
  const [list, setList] = useState([
    { text: "Get MERN black belt", completed: true },
    // { text: "js", completed: false },
    // { text: "PHP", completed: false },
  ]);

  const [input, setInput] = useState("");

  // 02 En etiqueta form para que la página no se refresque
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 03 En método onChange de input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // 04 Actualizar estado de lista y añadir el último dato de input
  const addItem = () => {
    if (input.trim() !== "") {
      //Condicional que permite no agregar nada si el input esta vacío
      setList([...list, { text: input, completed: false }]);
      setInput(""); // Limpiar el estado del input
    }
  };

  // 05 Tachar o des-tachar una tarea cuando se marca o desmarca el checkbox
  const handleToggle = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  // 06 Delete Item
  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <textarea 
          name="" 
          type="text" 
          value={input} 
          onChange={handleInput} 
          className="form-control"
          placeholder="Ingresa tu Tarea"
          />
      </div>
      <div>
        <button onClick={addItem} className="btn btn-primary">Add Task</button>
      </div>

      <div className="form-task">
        {list.map((item, index) => (
          <div className="form-item" key={index}>
            <label className="m2" style={{ textDecoration: item.completed ? "line-through" : "none",}}>
              <div>
              <input
                name="checkbox"
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(index)}
                className="form-check-input"
              />
              {item.text}
              </div>
            </label>

            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>delete task</button>
          </div>
        ))}
      </div>
    </form>
  );
};

export default TaskList;
