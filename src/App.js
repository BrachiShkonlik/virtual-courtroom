import './App.css';
import { Footer } from './Components/Footer';
import { DiscussionPanel } from './Components/DiscussionPanel'
import { MeetingRoom } from './Components/MeetingRoom';
import { DataFetcher } from './Components/DataFetcher';
import Store from './Redux/Store';
import { Provider } from 'react-redux';
import { Sidebar } from './Components/Sidebar';


function App() {
  const judges = [
    { name: 'Judge 1', videoStream: 'judge1-video-stream-url' },

  ];

  const parties = [
    { name: 'Party 1', videoStream: 'party1-video-stream-url' },
    { name: 'Party 2', videoStream: 'party2-video-stream-url' },
    { name: 'Party 1', videoStream: 'party1-video-stream-url' },
    { name: 'Party 2', videoStream: 'party2-video-stream-url' }
  ];
  // useEffect(() => {
  //   debugger
  //   <DataFetcher></DataFetcher>
  // });

  return (
    <div className="App">
      <Provider store={Store}>
        <DataFetcher></DataFetcher>
        <MeetingRoom judges={judges} parties={parties} />
        <Footer className='footer'></Footer>
        <Sidebar></Sidebar>
      </Provider>
      
    </div>
  );
}

export default App;
