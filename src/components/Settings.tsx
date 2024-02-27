import Window from "./Window"
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();
  const windowSize = {
    height: 750,
    width: 1000
  };
  const content = {
    title: <h1>{t('settings.windowTitle')}</h1>,
    body: <p>{t('landing.about')}</p>
  };

  const windowTitle = (
    <div className="about-title-wrapper">
      <span className="material-symbols-outlined about-settings-icon">settings</span>
      <span className="about-window-title">{t('landing.title')}</span>
    </div>
  );
  return (
    <div className="settings-wrapper">
      <Window size={windowSize} content={content} title={windowTitle}></Window>
    </div>
  )
}
