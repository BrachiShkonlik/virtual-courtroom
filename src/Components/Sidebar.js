import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Modal from './Modal';
import { MdOutlinePeopleOutline } from "react-icons/md";
import { RiScales3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import '../Style/Sidebar.css';

export function Sidebar() {

    const [isPeopleModalOpen, setIsPeopleModalOpen] = useState(false);
    const [isDiscussionModalOpen, setIsDiscussionModalOpen] = useState(false);
    const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsPeopleModalOpen(false);
        setIsDiscussionModalOpen(false);
        setIsManagerModalOpen(false);
        setIsSettingsModalOpen(false)
    };

    const panelDetails = (useSelector((state) => state.PanelReducer));
  
    const judges = panelDetails.judges;
    const parties = panelDetails.litigants;
  
    if (!judges || !parties) {
      return <div>Loading...</div>; 
    }

    const handleLeaveDiscussion = () => {
        // Logic for leaving the discussion
    };


    return (
        <div className="sidebar">
            <div className="logo-section">
                <img src='../Style/Logo.jpg' alt="Logo" />
            </div>
            <div className="zoom-sidebar">
                <div className="sidebar-section" onClick={() => setIsPeopleModalOpen(true)}>
                    <div className="people-icon">
                        <MdOutlinePeopleOutline className='icon' />
                        <div className="participant-circle">{judges.length + parties.length}</div>
                    </div>
                    <h2>אנשים</h2>
                </div>
                <div className="sidebar-section" onClick={() => setIsDiscussionModalOpen(true)}>
                    <RiScales3Line className='icon' />
                    <h2>פרטי דיון</h2>
                </div>
                <div className="sidebar-section" onClick={() => setIsManagerModalOpen(true)}>
                    <LuShield className='icon' />
                    <h2>מנהל דיון</h2>
                </div>
                <div className="sidebar-section" onClick={() => setIsSettingsModalOpen(true)}>
                    <IoSettingsOutline className='icon' />
                    <h2>הגדרות</h2>
                </div>
            </div>

            <Modal isOpen={isPeopleModalOpen} onClose={handleCloseModal}>
                <h3>אנשים</h3>
                <ul>
                    {judges.map( judge => (
                        <p>כבוד השופט {judge}</p>
                    ))}
                     {parties.map( party => (
                        <p>{party}</p>
                    ))}
                </ul>

            </Modal>
            <Modal isOpen={isDiscussionModalOpen} onClose={handleCloseModal}>
                <h3>פרטי דיון</h3>
                <p>תיק מספר {panelDetails.numberCase}</p>
            </Modal>
            <Modal isOpen={isManagerModalOpen} onClose={handleCloseModal}>
                <h3>מנהל דיון</h3>
                <ul>
                    {judges.map( judge => (
                        <p>כבוד השופט {judge}</p>
                    ))}
                </ul>
            </Modal>
            <Modal isOpen={isSettingsModalOpen} onClose={handleCloseModal}>
                <h3>הגדרות</h3>
                <p></p>
            </Modal>
            <button className="leave-discussion-btn" onClick={handleLeaveDiscussion}>יציאה מהדיון</button>

        </div>
    );
}

