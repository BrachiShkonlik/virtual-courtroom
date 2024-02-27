//NOT WORk!!! DELETE

import React, { useState, useEffect } from 'react';

const Participant = ({ name, video, isVisible }) => {
  return (
    <div className={`participant ${isVisible ? '' : 'hidden'}`}>
      <video src={video} autoPlay muted />
      <p>{name}</p>
    </div>
  );
};

export function VirtualCourtroom ()  {
  const [participants, setParticipants] = useState([]);

  // Simulate fetching participants from an API
  useEffect(() => {
    const fetchParticipants = async () => {
    //  const response = await fetch('https://example.com/api/participants');
    //   const data = await response.json();
    const fakePanelData = {
        numberCase: "12345-02-45",
        CommitteeName: "ועדת ערר לעניני קורונה",
        discussionTopic: "השתתפות בהוצאות קבועות",
        judges: ["ישראל ישראלי"],
        litigants: ["קובי יעקובי", "שושנה שושני", "קובי יעקובי", "שושנה שושני"]
    };
      setParticipants(fakePanelData);
    };
    fetchParticipants();
  }, []);

  const calculateGridTemplateColumns = (numParticipants) => {
    // Adjust the base size and spacing based on your needs
    const baseSize = 200;
    const spacing = 10;
    const totalWidth = window.innerWidth;
    const columns = Math.ceil(totalWidth / (baseSize + spacing));
    const gridTemplateColumns = [...Array(columns)].fill(`calc(${baseSize}px + ${spacing}px)`);
    return gridTemplateColumns.join(' ');
  };

  // Simulate visibility changes (replace with logic for managing participant visibility)
  const [visibleParticipants, setVisibleParticipants] = useState(participants);

  const handleParticipantVisibility = (participantId) => {
    setVisibleParticipants((prevParticipants) =>
      prevParticipants.map((participant) =>
        participant.id === participantId ? { ...participant, isVisible: !participant.isVisible } : participant
      )
    );
  };

  return (
    <div className="virtual-courtroom">
      <div className="judges">
        {/* Display judge(s) video and information here */}
      </div>
      <div className="participants-grid" style={{ gridTemplateColumns: calculateGridTemplateColumns(participants.length) }}>
        {participants.map((participant) => (
          <Participant
            key={participant.id}
            name={participant.name}
            video={participant.video}
            isVisible={visibleParticipants.find((p) => p.id === participant.id)?.isVisible || false}
            onVisibilityChange={() => handleParticipantVisibility(participant.id)}
          />
        ))}
      </div>
    </div>
  );
};

//  default VirtualCourtroom;
