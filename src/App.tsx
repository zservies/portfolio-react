import ToolbarHeader from './components/ToolbarHeader';
import Taskbar from './components/Taskbar';
import WorkHistory from './components/WorkHistory';
import About from './components/About';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';

function App() {
  return (
    <div className="app-wrapper">
      <ToolbarHeader></ToolbarHeader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="work" element={<WorkHistory />}/>
          <Route path="settings" element={<Settings />}/>
        </Routes>
      </BrowserRouter>

      <Taskbar></Taskbar>
    </div>
  )
}

export default App
