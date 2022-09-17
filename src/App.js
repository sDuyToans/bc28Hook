import { Outlet } from 'react-router-dom';
import './App.css';
import HeaderHome from './components/HeaderHome/HeaderHome';

function App() {
  return (
    <div className="App">
      <HeaderHome/>
      <Outlet/>
    </div>
  );
}

export default App;
