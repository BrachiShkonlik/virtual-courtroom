import './App.css';
import { Footer } from './Components/Footer';
import { DiscussionPanel } from './Components/DiscussionPanel';

function App() {
  const participants = [
    { id: 1, name: 'Judge 1', type: 'judge' },
    { id: 2, name: 'Judge 2', type: 'judge' },
    { id: 3, name: 'Party 1', type: 'party' },
    { id: 4, name: 'Party 2', type: 'party' },
  ];
  return (
    <div className="App">
      <DiscussionPanel participants={participants} />
      <Footer className='footer'></Footer>
    </div>
  );
}

export default App;
