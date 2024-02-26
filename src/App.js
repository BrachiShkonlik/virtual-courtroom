import './App.css';
import { Footer } from './Components/Footer';
import { DiscussionPanel } from './Components/DiscussionPanel'
import { MeetingRoom } from './Components/MeetingRoom';
import { DataFetcher } from './Components/DataFetcher';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import { Sidebar } from './Components/Sidebar';
import { Header } from './Components/Header';
import { Tune } from '@mui/icons-material';


function App() {

  return (
    <div className="App">
      <Provider store={Store}>
        <Header isExpanded={Tune} isRecording={Tune}></Header>
        <DataFetcher></DataFetcher>
        <MeetingRoom />
        <Footer className='footer'></Footer>
        <Sidebar></Sidebar>
      </Provider>
    </div>
  );
}

export default App;
