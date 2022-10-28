import {useQueryClient } from 'react-query'
import { useState } from 'react';

import './styles.css';
export const TodoItem = (props) => {
    const client = useQueryClient();
    const [isFetching, setFetching] = useState(false);

    const deleteTodo = async () => {
        setFetching(true);
        await props.deleteTodo(props.todo.id);
    };


    return (
        <li  key = { props.todo.id }>
            {props.todo.title}
            <button disabled = { isFetching } onClick = { deleteTodo }>
                ❌
            </button>
        </li>
    );

}