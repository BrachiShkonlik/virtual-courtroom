import React from 'react';
// import '../Style/DiscussionPanel.css'

export function DiscussionPanel({participants}) {
    const judges = participants.filter(participant => participant.type === 'judge');
    const parties = participants.filter(participant => participant.type === 'party');
    return (
        <div className="VideoLayout">
            <div className="JudgesSection">
                <h2>Judges</h2>
                <div className="VideoGrid">
                    {judges.map(judge => (
                        <div key={judge.id} className="Participant">{judge.name}</div>
                    ))}
                </div>
            </div>
            <div className="PartiesSection">
                <h2>Parties</h2>
                <div className="VideoGrid">
                    {parties.map(party => (
                        <div key={party.id} className="Participant">{party.name}</div>
                    ))}
                </div>
            </div>
        </div>
    );

}




