import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setMergedData } from '../Redux/Actions/MergedDataAction';
import { useDispatch } from "react-redux";

export function ParentComponent() {
    const panelData = useSelector((state) => state.PanelReducer);
    const zoomData = useSelector((state) => state.ZoomReducer);
    
    const [mergedData, setMergedData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const merged = mergeData(panelData, zoomData);
        setMergedData(merged);
    }, [panelData, zoomData]);

    const mergeData = (panelData, zoomData) => {
        const mergedData = {
            ...panelData, 
            participants: [] 
        };
    
        panelData.judges.forEach(judgeName => {
            const participant = zoomData.find(participant => participant.name === judgeName);
            if (participant) {
                mergedData.judges.push(participant);
            }
        });
    
        // Merge litigants from panel data
        panelData.litigants.forEach(litigantName => {
            const participant = zoomData.find(participant => participant.name === litigantName);
            if (participant) {
                mergedData.participants.push(participant);
            }
        });
    
        dispatch(setMergedData(mergedData));
    };

    return null; // You can render components here using the mergedData state
};

//  default ParentComponent;
