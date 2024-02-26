import Landing from './components/Landing';
import ToolbarHeader from './components/ToolbarHeader';
import Taskbar from './components/Taskbar';
import WorkHistory from './components/WorkHistory';
import './App.css'

function App() {

  return (
    <div className="app-wrapper">
      <ToolbarHeader></ToolbarHeader>
      <div className="app-windows">
        <Landing></Landing>
        <WorkHistory></WorkHistory>
      </div>
      <Taskbar></Taskbar>
    </div>
  )
}

export default App
