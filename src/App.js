import './App.css';
import { Footer } from './Components/Footer';
import { MeetingRoom } from './Components/MeetingRoom';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import { DataPanelFetcher } from './Components/DataPanelFetcher';
import { Sidebar } from './Components/Sidebar';
import { Header } from './Components/Header';
import { DataZoomFetcher } from './Components/DataZoomFetcher';




function App() {

  return (
    <div className="App">
      <Provider store={Store}>
        <Header ></Header>
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
