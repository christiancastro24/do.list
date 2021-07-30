import './App.css';
import { Toast } from './components/Toastify';
import { Routes } from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes />
          <Toast />
        </div>
      </header>
    </div>
  );
}

export default App;
