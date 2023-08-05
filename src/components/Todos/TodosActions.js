import  { RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import Button from "../UI/Button";
import s from "./TodosActions.module.css"

const TodosActions = (props) => {
    const {resetTodos, deleteCompletedTodos, completedTodosExist} = props
    return (
        <div className={s.todosActionsContainer}>
            <Button title="Reset todos" onClick={resetTodos}>
                <RiRefreshLine/>
            </Button>
            <Button title="Clear Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
                <RiDeleteBin2Line/>
            </Button>
        </div>
    )
}

export default TodosActions