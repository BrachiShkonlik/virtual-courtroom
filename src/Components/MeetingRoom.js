// MeetingRoom.js
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Participant from '../Components/Participant';
import '../Style/MeetingRoom.css';

export function MeetingRoom() {
  const panelDetails = useSelector(state => state.PanelReducer);
  const zoomDetails = useSelector(state => state.ZoomReducer);
  const judges = panelDetails.judges || [];
  const parties = panelDetails.litigants || [];
  const participantContainersRefs = useRef([]);

  useEffect(() => {
    participantContainersRefs.current.forEach((container, index) => {
      const video = container.querySelector('video');
      if (video) {
        const aspectRatio = video.videoWidth / video.videoHeight;
        const containerWidth = video.offsetWidth;
        const containerHeight = containerWidth / aspectRatio;

        container.style.height = containerHeight + 'px';

        if (index < judges.length) {
          const ratio = 0.7;
          container.style.height = (containerWidth / aspectRatio) * ratio + 'px';
        }
      }
    });
  }, [judges, parties]);

  if (!judges.length || !parties.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MeetingRoom">
      <div className="JudgesContainer">
        {judges.map((judge, index) => {
          const matchingJudge = zoomDetails.find(zoomJudge => zoomJudge.name === judge);

          return (
            <Participant
              key={judge.id}
              ref={ref => (participantContainersRefs.current[index] = ref)}
              name={matchingJudge.name}
              role="judge"
              CommitteeName={panelDetails.CommitteeName}
              videoStream={matchingJudge.videoStream}
              audioStatus={matchingJudge.audioStatus}
              litigant=""
              itIsMyComputer={matchingJudge.itIsMyComputer}
            />
          );
        })}
      </div>
      <div className="PartiesContainer">
        {parties.map((party, index) => {
          const matchingParty = zoomDetails.find(zoomParty => zoomParty.name === party.name);
          const litigant = panelDetails.litigants.find(item => item.name === party.name)?.litigant;

          return (
            <Participant
              key={party.id}
              ref={ref => (participantContainersRefs.current[judges.length + index] = ref)}
              name={party.name}
              role="party"
              CommitteeName={panelDetails.CommitteeName}
              videoStream={matchingParty.videoStream}
              audioStatus={matchingParty.audioStatus}
              litigant={litigant}
              itIsMyComputer={matchingParty.itIsMyComputer}
            />
          );
        })}
      </div>
    </div>
  );
};


