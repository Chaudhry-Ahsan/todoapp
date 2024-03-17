import React from 'react';

interface TodoProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onToggle }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <span className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
      <button onClick={() => onToggle(todo.id)} className="ml-2 text-sm text-blue-500">Complete</button>
    </div>
  );
};

export default Todo;
