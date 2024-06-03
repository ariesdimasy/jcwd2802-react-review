import axios from "axios";
import { useEffect, useState } from "react"
import { Card, CardHeader, Heading } from "@chakra-ui/react"

export default function Home(){

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        handleLoadTodos()
    },[])

    const handleLoadTodos = async () => {
        const todos = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(todos)
        setTodos(todos.data)
    }

    return (<div className="p-5">
        <h3> product </h3>
        <ul style={{ display:'flex', flexDirection:'column'}}>
            {todos.map((item, index) => {
                return (<a key={index} href={`/detail/${item.id}`} className="m-5 " width={'20%'}><Card  >
                    <CardHeader>
                        <Heading size='md'>{item.title}</Heading>
                    </CardHeader>
                </Card></a>)
            })}
        </ul>
    </div>)
}