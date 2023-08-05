import {useState} from "react";
import s from "./TodoForm.module.css"
import Button from "../UI/Button";

const TodoForm = (props) => {
    const {addTodo} = props
    const [text, setText] = useState('')
    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <div className={s.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input placeholder="Enter new todo"
                       value={text}
                       onChange={(e) => setText(e.target.value)}/>
                <Button type="submit" title="Submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default TodoForm