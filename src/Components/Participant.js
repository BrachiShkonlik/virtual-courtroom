import React from 'react';

function Participant({ videoStream }) {
  return (
    <div className="Participant">
      {videoStream && <video src={videoStream} autoPlay muted />}
    </div>
  );
}

export default Participant;
