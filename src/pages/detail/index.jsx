import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Detail(){

    const [todo, setTodo] = useState('')
    const {id} = useParams()

    useEffect(() => {
        handleGetTodo()
    },[])

    const handleGetTodo = async () => {
        const todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        setTodo(todo.data)
    }

    return (<div className="p-5">
        <h1> Detail </h1>
        <hr />
        <div>{todo?.title}</div>
    </div>)
}