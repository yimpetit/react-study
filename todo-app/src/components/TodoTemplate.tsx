import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }: any) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Todo Manager</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
