import { useTodos } from '../hooks/useTodos';

export const Title = () => {
    const {pendingTodos} = useTodos();
  return (
    <h1>
      Todo App - <small>Pending: {pendingTodos}</small> 
    </h1>
  )
}
