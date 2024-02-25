import React from 'react';

function Participant({ name, videoStream }) {
  return (
    <div className="Participant">
      {videoStream && <video src={videoStream} autoPlay muted />}
      <span>{name}</span>
    </div>
  );
}

export default Participant;
