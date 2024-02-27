import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { BiMicrophoneOff } from 'react-icons/bi';
import { FaMicrophone } from 'react-icons/fa6';
import logo from '../Style/logo.jpg';
import '../Style/MeetingRoom.css';

export function MeetingRoom() {
  const panelDetails = useSelector((state) => state.PanelReducer);
  const zoomDetails = useSelector((state) => state.ZoomReducer);
  const judges = zoomDetails.judges || [];
  const parties = zoomDetails.litigants || [];
  const participantContainersRefs = useRef([]);

  useEffect(() => {
    // Calculate and set size of participant containers based on video dimensions
    participantContainersRefs.current.forEach(container => {
      const video = container.querySelector('video');
      if (video) {
        const aspectRatio = video.videoWidth / video.videoHeight;
        const containerWidth = video.offsetWidth;
        const containerHeight = containerWidth / aspectRatio;
  
        container.style.height = containerHeight + 'px';
      }
    });
  }, [judges, parties]);
  

  if (!judges.length || !parties.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MeetingRoom">
      <div className="JudgesContainer">
        {judges.map((judge, index) => (
          <div key={judge.id} ref={ref => participantContainersRefs.current[index] = ref} className="ParticipantContainer judge">
            <video className="Participant" src={judge.videoStream} autoPlay muted playsInline />
            <div className="Footer">
              <div className="FooterContent">
                <p className="CommitteeName">{panelDetails.CommitteeName}</p>
                <p className="Name">כבוד השופט {judge.name}</p>
              </div>
              <img src={logo} alt="Logo" className="Logo" />
              <div className="MicrophoneIcon">
                {judge.audioStatus === "connected" ? <FaMicrophone /> : <BiMicrophoneOff />}
              </div>
            </div>
            <div className="TopRightContent">דובר</div>
          </div>
        ))}
      </div>
      <div className="PartiesContainer">
        {parties.map((party, index) => {
          // Find the litigant corresponding to the party's name
          const litigant = panelDetails.litigants.find(item => item.name === party.name)?.litigant;

          return (
            <div key={party.id} ref={ref => participantContainersRefs.current[judges.length + index] = ref} className="ParticipantContainer party">
              <video className="Participant" src={party.videoStream} autoPlay muted playsInline />
              <div className="Footer">
                <div className="FooterContent">
                  <p className="Litigant"> צד {litigant} </p>
                  <p className="Name">עו"ד {party.name}</p>
                </div>
                <div className="MicrophoneIcon">
                  {party.audioStatus === "connected" ? <FaMicrophone /> : <BiMicrophoneOff />}
                </div>
              </div>
              <div className="TopRightContent">
                 צד {litigant} 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
