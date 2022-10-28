/* Core */
import { useQuery } from 'react-query';


export function useFetchTodos () {
    const query = useQuery(
        'todos', () => fetch(
            './mockTasks.json'
          ).then((response) => response.json()));
    return query;
};
