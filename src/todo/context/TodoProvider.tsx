import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces/interfaces';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            description: 'Walk the dog',
            completed: false
        },
        {
            id: '2',
            description: 'Buy groceries',
            completed: false
        },
        {
            id: '3',
            description: 'Empty the cat litter box',
            completed: false
        },
        {
            id: '4',
            description: 'Take Karate Lesson',
            completed: false
        }
    ],
    completed: 0,
    pending: 2,
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const  [todoState, dispatch] = useReducer(todoReducer, initialState);

    const toggleTodo = (id: string) => {
        dispatch({ type: 'Toggle Todo', payload: {id}});
    }

  return (
    <TodoContext.Provider value={{todoState, toggleTodo}}>
        { children }
    </TodoContext.Provider>
  )
}
