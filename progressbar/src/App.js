import logo from './logo.svg';
import './Components/Progressbar.css';
import MultiColorProgressBar from './Components/MultiColorProgressBar';
import ReactDOM from 'react-dom';
import Table from './Components/Table';


function App() {
  return (
    <div>      
      <div>
    <MultiColorProgressBar/>
    </div>

      <div>
      <Table/>
      </div>
    </div>
  );
}

export default App;
