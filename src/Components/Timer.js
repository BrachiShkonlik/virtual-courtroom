import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import '../Style/Timer.css';


export function Timer() {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useStopwatch({ autoStart: true });


  return (
    <div className='timerContainer'>
      <div className='timer'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
