import { useState } from "react"
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('');
    const [todoList, setTodoList] = useState<string[]>([]);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            // [...tasks, newTask] -> Spread operator. Toma la lista actual y le agrega el nuevo elemento
            setTodoList(tasks => [...tasks, newTask])
            setNewTask('')
        }
    }

    const handleDeleteTask = (index: number) => {
        // Filter, devuelve una lista con los elementos que cumplan con el filtro.
        // En este caso una lista con los elementos cuyo índice sea diferente al ingresado.
        setTodoList(tasks => tasks.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <div className="flex">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New Task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <TodoList todoList={todoList} deleteTask={handleDeleteTask}></TodoList>
        </div>
    )
}