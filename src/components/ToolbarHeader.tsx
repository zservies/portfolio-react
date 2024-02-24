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
    const localeTime = dateTime.toLocaleTimeString();
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
        {/* TODO: remove icon placeholder */}
        <div className="toolbar-icon"></div>
        <span className="toolbar-name">{t('name')}</span>
        <span className="toolbar-file">{t('toolbar.file')}</span>
        <span className="toolbar-edit">{t('toolbar.edit')}</span>
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
