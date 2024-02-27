import Landing from './components/Landing';
import ToolbarHeader from './components/ToolbarHeader';
import Taskbar from './components/Taskbar';
import WorkHistory from './components/WorkHistory';
import About from './components/About';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';

function App() {
  // TODO: Extract this into its own template/component to make cleaner.
  const landing: JSX.Element =(<>
          <div className="app-windows">
          <About></About>
          <Landing></Landing>
        </div>
        </>);

  return (
    <div className="app-wrapper">
      <ToolbarHeader></ToolbarHeader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={landing}/>
          <Route path="settings" element={<Settings />}/>
        </Routes>
      </BrowserRouter>

      <Taskbar></Taskbar>
    </div>
  )
}

export default App
