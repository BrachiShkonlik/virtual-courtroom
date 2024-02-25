import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setPanelDetails } from '../Redux/Actions/PanelAction';
import { setZoomDetails } from '../Redux/Actions/ZoomAction';


export function DataFetcher() {
    const dispatch = useDispatch();
    useEffect(() => {
        // Simulated async dispatch with pre-defined data
        const fakePanelData = {
            numberCase: "12345-02-45",
            CommitteeName: "ועדת ערר לעניני קורונה",
            discussionTopic: "השתתפות בהוצאות קבועות",
            judges: ["ישראל ישראלי"],
            litigants: ["קובי יעקובי", "שושנה שושני"]
        };
        dispatch(setPanelDetails(fakePanelData));
    }, [dispatch]);

    // DataFetcher doesn't render anything

    useEffect(() => {
        const fetchPanelData = async () => {
            try {
                // Make a GET request to your Node.js server
                const response = await fetch('http://any-node-server-url/data');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                dispatch(setPanelDetails(responseData));


            } catch (error) {
                alert("error:", error.message);
                // setError(error.message)
            }
        };

        const fetchZoomData = async () => {
            try {
                // Make a GET request to your Node.js server
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

        //fetchPanelData();
        //fetchZoomData();
    });
    return null;
}
