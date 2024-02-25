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

    function startLiveSession() {
        // Code to start the live session
        // This function will be called when the user clicks on the live button
    }


    return (
        <MDBFooter className='text-white text-center footer' style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
            <MDBContainer>
                <div className="MediaOptionsContainer">
                    <CDBBtn color="dark" circle className="share margin" onClick={() => handleScreenShareToggle()}><span className='btn-label'>שיתוף</span> <MdIosShare /></CDBBtn>
                    <CDBBtn color="dark" circle className="microphone margin" onClick={() => handleMicrophoneToggle()}><span className='btn-label'>מיקרופון</span><FaMicrophone /></CDBBtn>
                    <CDBBtn color="dark" circle className="camera margin" onClick={() => handleCameraToggle()} ><span className='btn-label'>מצלמה</span> <BsFillCameraVideoFill /></CDBBtn>
                </div>
            </MDBContainer>
            <MDBContainer className='container'>
                <div className="LiveControlsContainer">
                    <Button className="live" variant="danger" onClick={() => startLiveSession()}><span className='live_text'>Live</span></Button>
                    <Timer className="timer"></Timer>
                </div>
            </MDBContainer>
        </MDBFooter>
    );

}







