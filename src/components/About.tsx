import './About.css'
import { useTranslation } from 'react-i18next';
import Window from './Window';

export default function About() {
  const { t } = useTranslation();
  const windowSize = {
    height: 500,
    width: 1000
  };
  const content = {
    title: <h1>{t('name')}</h1>,
    body: <p>{t('landing.about')}</p>
  };

  const windowTitle = (
    <div className="about-title-wrapper">
      <span className="material-symbols-outlined">home</span>
      <span className="about-window-title">{t('landing.title')}</span>
    </div>
  );

  return (
    <div className="about-wrapper">
      <Window content={content} size={windowSize} title={windowTitle}></Window>
    </div>
  )
}
// "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
