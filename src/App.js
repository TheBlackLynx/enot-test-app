import { TodoList } from './components/TodoList/TodoList';
import React from 'react';
import {useFetchTodos} from './hooks/useFetchTodos';
import { Accordion } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const UserContext = React.createContext();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  
  const fetchTodosQ = useFetchTodos();
  return (

    <ThemeProvider theme={darkTheme}>
    <UserContext.Provider value={fetchTodosQ}>
    <TodoList />
    </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
