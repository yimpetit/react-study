import React, { useState } from 'react';

const IterationSample = () => {
  const[names, setNames] = useState([
    { id: 1, text: '눈사람'},
    { id: 2, text: '눈'},
    { id: 3, text: '당근'},
    { id: 4, text: '올리브'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const onChange = (e: any) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  }
  const onRemove = (id:number) => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }
  const nameList = names.map(name => 
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  );
  return (
    <div>
      <input type="text" value={inputText} onChange={onChange}/>
      <button onClick={onClick}>추가</button>
      <ul>
        {nameList}
      </ul>
    </div>
  );
};

export default IterationSample;