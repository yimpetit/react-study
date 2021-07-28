import React from 'react';
import { Todo } from '../interface';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

interface TodosProps {
  todo : Todo;
  onRemove: (id:number) => void;
  onToggle: (id:number) => void;
  style: any;
}

const TodoListItem = ({ todo, onRemove, onToggle, style }: TodosProps) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>}
          <div className="text">{ text }</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline/>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);