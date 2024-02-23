import Landing from './components/Landing';
import ToolbarHeader from './components/ToolbarHeader';
import './App.css'

function App() {

  return (
    <div className="app-wrapper">
      <ToolbarHeader></ToolbarHeader>
      <Landing></Landing>
      <div className="empty-flex"></div>
    </div>
  )
}

export default App
