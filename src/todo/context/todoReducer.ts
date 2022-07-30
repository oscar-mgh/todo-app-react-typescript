import { TodoState, Todo } from '../interfaces/interfaces';
type TodoAction = 
    | { type: 'Add Todo', payload: Todo}
    | { type: 'Toggle Todo', payload: { id: string}};

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {
    switch (action.type) {
        case 'Add Todo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }           
        case 'Toggle Todo':
            return {
                ...state,
                todos: state.todos.map( ({...todo}) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }           
    
        default:
            return state;
    }
}