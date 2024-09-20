import { Task } from "./Task"

type TodoList = {
    todoList: string[]
    deleteTask: (index: number) => void
}

export const TodoList = ({ todoList, deleteTask }: TodoList) => {
    return (
        <div className="taskList">
            {todoList.map((task, index) => (
                <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
            )
            )}
        </div>
    )
}