import React from 'react';
import { BiMicrophoneOff } from 'react-icons/bi';
import { FaMicrophone } from 'react-icons/fa6';
import logo from '../Style/logo.jpg';
import '../Style/Participant.css';

export default function Participant({ name, role, CommitteeName, videoStream, audioStatus, litigant, itIsMyComputer }) {
  const topRightClassName = itIsMyComputer === 'true' ? 'Blue' : 'TopRightContent';

  return (
    <div className={`ParticipantContainer ${role}`}>
      <video className="Participant" src={videoStream} autoPlay muted playsInline />
      <div className="Footer">
        <div className="FooterContent">
          <p className={role === 'judge' ? 'CommitteeName' : 'Litigant'}>
            {role === 'judge' ? CommitteeName : `צד ${litigant}`}
          </p>
          <p className="Name">{role === 'judge' ? `כבוד השופט ${name}` : `עו"ד ${name}`}</p>
        </div>
        {role === 'judge' && <img src={logo} alt="Logo" className="Logo" />}
        <div className="MicrophoneIcon">
          {audioStatus === 'connected' ? <FaMicrophone /> : <BiMicrophoneOff />}
        </div>
      </div>
      <div className={topRightClassName}>{role === 'judge' ? 'דובר' : `צד ${litigant}`}</div>
    </div>
  );
}
