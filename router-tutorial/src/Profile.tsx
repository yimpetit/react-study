import React from 'react';
import { withRouter } from 'react-router';
import WithRouterSample from './WithRouterSample';


interface Data {
  [user:string]: {
    name: string;
    description: string;
  }
}


const data:Data = {
  velopert: {
    name: 'James',
    description: 'like react'
  },
  gildong: {
    name: 'gildong',
    description: 'old story person'
  }
}

const Profile = ({ match }:any) => {
  const { username } = match.params;
  const profile = data[username];
  if(!profile) {
    return <div>non existent Users</div>
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample></WithRouterSample>
    </div>

  );
};

export default withRouter(Profile);