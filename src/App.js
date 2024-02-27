import './App.css';
import { Footer } from './Components/Footer';
// import { DiscussionPanel } from './Components/DiscussionPanel'
import { MeetingRoom } from './Components/MeetingRoom';
import { DataPanelFetcher } from './Components/DataPanelFetcher';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import { Sidebar } from './Components/Sidebar';
import { Header } from './Components/Header';
import { Tune } from '@mui/icons-material';
import { DataZoomFetcher } from './Components/DataZoomFetcher';
import { ParentComponent } from './Components/ParentComponent ';
// import { VirtualCourtroom } from './Components/VirtualCourtroom';



function App() {

  return (
    <div className="App">
      <Provider store={Store}>
        <Header isExpanded={Tune} isRecording={Tune}></Header>
        <DataPanelFetcher></DataPanelFetcher>
        <DataZoomFetcher></DataZoomFetcher>
        {/* <ParentComponent></ParentComponent> */}
        <MeetingRoom></MeetingRoom>
        {/* <VirtualCourtroom ></VirtualCourtroom> */}
        <Footer className='footer'></Footer>
        <Sidebar></Sidebar>
      </Provider>
    </div>
  );
}

export default App;
