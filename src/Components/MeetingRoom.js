import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import Participant from './Participant';
import '../Style/MeetingRoom.css';

export function MeetingRoom() {


  const panelDetails = (useSelector((state) => state.PanelReducer));

  //   if (!panelDetails) {
  //     return <div>Loading...</div>;
  // }

  const judges = panelDetails.judges;
  const parties = panelDetails.litigants;

  if (!judges || !parties) {
    return <div>Loading...</div>; // Or any other loading indicator
  }


  const calculate = (group, totalSpace) => {
    const numParticipants = group.length;
    if (numParticipants === 0) return 0; // No participants, no width

    // Calculate width dynamically based on the number of participants and total space available
    const widthPercentage = (totalSpace / numParticipants);
    return widthPercentage;
  };

  const calculateWidth = (group, totalSpace) => {
    const width = calculate(group, totalSpace);
    return `${width}%`;
  };

  const calculateHeight = (group, totalSpace) => {
    const height = calculate(group, totalSpace);
    return `${height * 3 / 4}%`; // Aspect ratio: 4:3
  };

  const totalJudgeSpace = (100 - judges.length * 2); // 50% space for judges
  const totalParticipantSpace = (100 - parties.length * 2); // 50% space for participants



  return (
    <div className="Participants" >
      <div className="JudgesContainer" >
        {judges.map(judge => (
          <div
            style={{
              width: calculateWidth(judges, totalJudgeSpace), height: calculateHeight(judges, totalJudgeSpace),
              backgroundColor: 'black'
            }}>
            <Participant videoStream={/*judge.videoStream*/ "ff"} />
            <div className="Footer">כבוד השופט {judge}</div>
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
            <Participant videoStream={/*party.videoStream*/ "ff"} />
            <div className="Footer">עו"ד {party}</div>
          </div>
        ))}
      </div>
    </div>
  );
}