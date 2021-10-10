import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './Routes'
import { GlobalStyle } from './styles/global';
function App() {
  
  return (
    <div className="App">
        <ToastContainer />
        <GlobalStyle />
        <Routes />
    </div>
  );
}

export default App;
