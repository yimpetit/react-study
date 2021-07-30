import React from 'react';
import qs from 'qs';

const About = ({ location }:any) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>About</h1>
      <p>About Page.</p>
      {showDetail && <p>detail value is true</p>}
    </div>
  );
};

export default About;