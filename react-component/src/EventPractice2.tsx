import React, { useState } from 'react';

const EventPractice2 = () => {
  const [form, setForm] = useState({
    username:'',
    message:''
  });
  const { username, message } = form;
  const onChange = (e: any) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
      username:'',
      message:''
    });
  };
  const onKeyPress = (e: any) => {
    if(e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event</h1>
      <h2>{message}</h2>
      <input 
        type="text"
        name="message"
        placeholder="input text anything"
        value={message}
        onChange={onChange}
      />
      <input 
        type="text"
        name="username"
        placeholder="input text anything"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default EventPractice2;