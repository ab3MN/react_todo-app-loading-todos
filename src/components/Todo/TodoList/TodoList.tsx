import { Todo } from '../../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
