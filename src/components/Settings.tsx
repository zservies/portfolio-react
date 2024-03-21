import Window from "./Window";
import './Settings.css';
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();
  const windowSize = {
    height: 750,
    width: 1000
  };

  const body = (
    <div className="assets">
      <h4>Assets</h4>
      <a className="asset-link" href="https://www.flaticon.com/free-icons/mail" title="mail icons" target="_blank">Mail icons created by Freepik - Flaticon</a>
      <a className="asset-link" href="https://www.flaticon.com/free-icons/settings" title="settings icons" target="_blank">Settings icons created by Stockio - Flaticon</a>
      <a className="asset-link" href="https://www.flaticon.com/free-icons/curriculum-vitae" title="curriculum vitae icons" target="_blank">Curriculum vitae icons created by kerismaker - Flaticon</a>
      <a className="asset-link" href="https://fonts.google.com/icons" title="Material icons" target="_blank">Material Icons - Google Fonts</a>
    </div>
  )

  const content = {
    title: <h1>{t('settings.windowTitle')}</h1>,
    body: body
  };


  const windowTitle = (
    <div className="about-title-wrapper">
      <span className="material-symbols-outlined about-settings-icon">settings</span>
      <span className="about-window-title">{t('settings.windowTitle')}</span>
    </div>
  );
  return (
    <div className="settings-wrapper">
      <Window size={windowSize} content={content} title={windowTitle}></Window>
    </div>
  )
}
