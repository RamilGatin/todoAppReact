import {RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import s from "./Todo.module.css"
import {FaCheck} from "react-icons/fa";

const Todo = (props) => {
    const {todo, deleteTodo, toggleTodo} = props
    return (
        <div className={`${s.todo} ${todo.isCompleted ? s.completedTodo : ''}`}>
            <RiTodoFill className={s.todoIcon}/>
            <div className={s.todoText}>{todo.text}</div>
            <RiDeleteBin2Line className={s.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
            <FaCheck className={s.checkIcon} onClick={() => toggleTodo(todo.id)}/>
        </div>
    )
}

export default Todo