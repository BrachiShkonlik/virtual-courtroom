import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { IoShieldOutline } from "react-icons/io5";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import '../Style/Header.css';

export function Header() {
    const panelDetails = useSelector((state) => state.PanelReducer);
    const zoomData = useSelector((state) => state.ZoomReducer);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        // Filter Zoom data to find if any participant meets the conditions
        const isRecordingParticipant = zoomData.some(participant => participant.itIsMyComputer === "true" && participant.ItisRecoder === "true");
        setIsRecording(isRecordingParticipant);
    }, [zoomData]);

    function toggleFullScreen() {
        if (!isFullScreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
        setIsFullScreen(!isFullScreen);
    }

    return (
        <div className="zoom-header">
            <div className="left">
                <div className="recording">
                    <span className="recording-text">{isRecording ? 'מקליט' : 'לא מקליט'}</span>
                    {isRecording && <div className="recording-indicator"></div>}
                </div>
                <div className="icon shield">
                    <IoShieldOutline />
                </div>
                <div className="icon fullscreen" onClick={toggleFullScreen}>
                    {isFullScreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
                </div>
            </div>
            <div className="right">
                <div className="panel-details">
                    <p className="title">משרד המשפטים, {panelDetails.CommitteeName} - {panelDetails.discussionTopic}</p>
                    <p className="number-case">תיק מספר {panelDetails.numberCase}</p>
                </div>
            </div>
        </div>
    );
}
