import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setZoomDetails } from '../Redux/Actions/ZoomAction';


export function DataZoomFetcher() {
    const dispatch = useDispatch();
    useEffect(() => {
        // Simulated async dispatch with pre-defined data
        const fakeZoomData =
            [{
                id: "123456",
                name: "ישראל ישראלי",
                email: "john@example.com",
                role: "moderator",
                audioStatus: "connected",
                videoStatus: "connected",
                shareScreenStatus: "not shared",
                videoStream: "videoStream",
                itIsMyComputer: "false",
                ItisRecoder: "true"
            }, {
                id: "64634646",
                name: "קובי יעקבי",
                email: "jane@example.com",
                role: "participant",
                audioStatus: "disconnected",
                videoStatus: "connected",
                shareScreenStatus: "not shared",
                videoStream: "videoStream",
                itIsMyComputer: "true",
                ItisRecoder: "true"
            }, {
                id: "5612646",
                name: "שושנה שושני",
                email: "alice@example.com",
                role: "participant",
                audioStatus: "disconnected",
                videoStatus: "connected",
                shareScreenStatus: "not shared",
                videoStream: "videoStream",
                itIsMyComputer: "false",
                ItisRecoder: "false"
            }];

        dispatch(setZoomDetails(fakeZoomData));
    }, [dispatch]);

    // DataFetcher doesn't render anything

    useEffect(() => {
        const fetchZoomData = async () => {
            try {
                // Make a GET request to Node.js server
                const response = await fetch('http://any-node-server-url/data');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                dispatch(setZoomDetails(responseData));
            } catch (error) {
                alert("error:", error.message);
                // setError(error.message)
            }
        };

        //fetchZoomData();

    });
    return null;
}
