import React from 'react';
import Scramble from '../Scramble/Scramble';

const Timer = () => (
  <h1>
    <Scramble puzzle="cube3x3" scrambleLength={12} />
  </h1>
);

export default Timer;
