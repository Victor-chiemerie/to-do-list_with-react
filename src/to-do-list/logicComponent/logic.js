import './logic.css';
import { useState } from 'react';
import Input from './inputComponent/input';
import List from './listComponent/list';

const Logic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: true,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  return (
    <div>
      <Input />
      <List todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
    </div>
  );
};

export default Logic;
