/* Core */
import { useMutation } from 'react-query';


export function useFetchTodos () {
    const mutation = useMutation((todoId) => fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}` , {
        method: 'DELETE',
      }))
    return mutation;
};
