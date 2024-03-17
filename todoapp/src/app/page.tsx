"use client"
import React, { useState } from 'react';
import Todo from '@/components/todo'; // Assuming this is the correct import path for your Todo component

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const IndexPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]); // Specify the type of todos as TodoItem[]

  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const handleToggleTodo = (id: number) => { // Add type annotation for id
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Todo App</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded text-black"
          placeholder="Add new todo"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo} className="mt-2 py-2 px-4 bg-blue-500 text-white rounded">Add Todo</button>
      </div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onToggle={handleToggleTodo} />
      ))}
    </div>
  );
};

export default IndexPage;
