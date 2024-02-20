import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-wrapper">
      <div className="window-buttons">
        <button className="dot-exit"></button>
        <button className="dot-min"></button>
        <button className="dot-max"></button>
      </div>
      <div className="landing-window">
        <h1>Name</h1>
      </div>
    </div>
  )
}
