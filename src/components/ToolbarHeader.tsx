import './ToolbarHeader.css';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';


export default function ToolbarHeader() {
  const { t } = useTranslation();
  const [date, setDate ] = useState<string>();
  const [time, setTime ] = useState<string>();
  
  useEffect(() => {
    setCurrentTimeDate();
  }, [])

  //TODO: Probably can clean this up a bit. Need to remove seconds from time?
  function setCurrentTimeDate() {
    const dateTime = new Date();
    const localeTime = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    setTime(localeTime);
    setDate(dateTime.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }));
  }

  setInterval(setCurrentTimeDate, 1000);



  return (
    <div className="toolbar-header-wrapper">
      <div className="toolbar-about">
        <a className="toolbar-icon" href='/'>
          <img src="/assets/home.png" alt="Home" width="20px" height="20px" />
        </a>
        <a className="toolbar-name" href='/'>{t('name')}</a>
        <a className="toolbar-item" href='/'>{t('toolbar.about')}</a>
        <a className="toolbar-item" href='work'>{t('toolbar.work')}</a>
        <a className="toolbar-item" href='projects'>{t('toolbar.projects')}</a>
        <a className="toolbar-item" href='settings'>{t('toolbar.settings')}</a>
      </div>
      <div className="empty-flex"></div>
      <div className="toolbar-date-time">
        <div>
          <span className="toolbar-date">{date}</span>
          <span className="toolbar-time">{time}</span>
        </div>
      </div>
    </div>
  )
}
