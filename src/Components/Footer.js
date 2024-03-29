import React from 'react';
import { Timer } from './Timer';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import '../Style/Footer.css';
import { CDBBtn } from "cdbreact";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";

export function Footer() {

    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 600);

    function handleCameraToggle() {
        // Code to toggle the camera on/off
        // This function will be called when the user clicks on the camera button
    }

    function handleMicrophoneToggle() {
        // Code to toggle the microphone on/off
        // This function will be called when the user clicks on the microphone button
    }

    function handleScreenShareToggle() {
        // Code to toggle screen sharing on/off
        // This function will be called when the user clicks on the share screen button
    }


    return (
        <MDBFooter className='text-white text-center footer' style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
            <MDBContainer>
                <div className="MediaOptionsContainer">
                    <div className="ZoomControl" onClick={() => handleScreenShareToggle()}><span className='btn-label'>שיתוף</span> <MdIosShare /></div>
                    <div className="ZoomControl" onClick={() => handleMicrophoneToggle()}><span className='btn-label'>מיקרופון</span><FaMicrophone /></div>
                    <div className="ZoomControl" onClick={() => handleCameraToggle()} ><span className='btn-label'>מצלמה</span> <BsFillCameraVideoFill /></div>
                </div>
            </MDBContainer>
            <MDBContainer className='container'>
                <div className="LiveControlsContainer">
                    <div className="live"><span className='live_text'>Live</span></div>
                    <Timer className="timer"></Timer>
                </div>
            </MDBContainer>
        </MDBFooter>
    );

}







