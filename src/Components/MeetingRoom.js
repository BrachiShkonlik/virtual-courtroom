import React from 'react';
import Participant from './Participant';
import '../Style/MeetingRoom.css';

export function MeetingRoom({ judges, parties }) {
  const calculate = (group, totalSpace) => {
    const numParticipants = group.length;
    if (numParticipants === 0) return 0; // No participants, no width

    // Calculate width dynamically based on the number of participants and total space available
    const widthPercentage = (totalSpace / numParticipants);
    return widthPercentage;
  };

  const calculateWidth = (group, totalSpace) => {
    const width = calculate(group, totalSpace);
    debugger
    return `${width}%`;
  };

  const calculateHeight = (group, totalSpace) => {
    const height = calculate(group, totalSpace);
    debugger
    return `${height * 3 / 4}%`; // Aspect ratio: 4:3
  };

  const totalJudgeSpace = (100 - judges.length*2); // 50% space for judges
  const totalParticipantSpace = 100 - parties.length*2; // 50% space for participants

  return (
    <div className="Participants" >
      <div className="JudgesContainer" >
        {judges.map(judge => (
          <div key={judge.id}
            style={{
              width: calculateWidth(judges, totalJudgeSpace), height: calculateHeight(judges, totalJudgeSpace),
              backgroundColor: 'black'
            }}>
            <Participant name={judge.name} videoStream={judge.videoStream} />
          </div>
        ))}
      </div>
      <div className="PartiesContainer" >
        {parties.map(party => (
          <div key={party.id}
            style={{
              width: calculateWidth(parties, totalParticipantSpace), height: calculateHeight(parties, totalParticipantSpace),
              backgroundColor: 'black'
            }}>
            <Participant name={party.name} videoStream={party.videoStream} />
          </div>
        ))}
      </div>
    </div>
  );
}