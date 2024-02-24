import './Landing.css';
import { useTranslation } from 'react-i18next';

export default function Landing() {
  const { t } = useTranslation();
  return (
    <div className="landing-wrapper">
      <div className="window-buttons">
        <button className="dot-exit"></button>
        <button className="dot-min"></button>
        <button className="dot-max"></button>
      </div>
      <div className="landing-window">
        <div className="landing-name">
          <h1>{t('name')}</h1>
        </div>
        <div className="landing-about">
          <p>{t('landing.about')}</p>
        </div>
      </div>
    </div>
  )
}
