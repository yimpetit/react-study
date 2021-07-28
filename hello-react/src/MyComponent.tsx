import React from 'react';

interface MyProp {
  name:string;
  children?: React.ReactNode;
}

const MyComponent = ({name, children}:MyProp) => {
  return (
    <div>
      <h1>컴포넌트 {name}</h1>
      {children}    
    </div>
  )
};

MyComponent.defaultProps = {
  name: 'base name'
};

export default MyComponent