import Landing from './components/Landing';
import ToolbarHeader from './components/ToolbarHeader';
import Taskbar from './components/Taskbar';
import './App.css'

function App() {

  return (
    <div className="app-wrapper">
      <ToolbarHeader></ToolbarHeader>
      <Landing></Landing>
      <Taskbar></Taskbar>
    </div>
  )
}

export default App
