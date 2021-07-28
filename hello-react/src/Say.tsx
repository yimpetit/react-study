import React, {useState} from 'react';

const Say = () => {
  const [message, setMessage] = useState('초기값');
  const onClickEnter = () => setMessage('hi');
  const onClickLeave = () => setMessage('bye');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>in</button>
      <button onClick={onClickLeave}>out</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color:'red'}} onClick={() => setColor('red')}>r</button>
      <button style={{color:'green'}} onClick={() => setColor('green')}>g</button>
      <button style={{color:'blue'}} onClick={() => setColor('blue')}>b</button>
    </div>
  )
}

export default Say;