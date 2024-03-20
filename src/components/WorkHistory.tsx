import './WorkHistory.css';
import Window from './Window';
import { useTranslation } from 'react-i18next';

export default function WorkHistory() {
  const { t } = useTranslation();
  const workHistorySize = {
    height: 800,
    width: 750
  };
  const employmentList = 
  <div className="work-history-wrapper">
    <div className="work-details">
      <h3 className="work-company">{t('workHistory.genesys')}</h3>
      <div>
        <h4 className="work-title">{t('workHistory.senior')}</h4>
        <p className="work-desc">{t('workHistory.genesysSeniorDesc')}</p>
      </div>
      <div>
        <h4 className="work-title">{t('workHistory.soft')}</h4>
        <p className="work-desc">{t('workHistory.genesysSoftDesc')}</p>
      </div>
    </div>
    <div className="work-details">
      <h3 className="work-company">{t('workHistory.sogeti')}</h3>
      <div>
        <h4 className="work-title">{t('workHistory.soft')}</h4>
        <p className="work-desc">{t('workHistory.sogetiSoftDesc')}</p>
      </div>
    </div>
    <a className="work-resume-link work-desc" href="/assets/resume_2024_ZacharyServies_no_contacts.pdf" target="_blank" title={t('taskbar.cvTooltip')}>{t('workHistory.resume')}</a>
  </div>
  const content = {
    title: <h1>{t('workHistory.title')}</h1>,
    body: employmentList
  };
  const windowTitle = (
    <div className="work-title-wrapper">
      <span className="material-symbols-outlined">work</span>
      <span className="work-window-title">{t('workHistory.title')}</span>
    </div>
  );

  
  return (
    <Window content={content} size={workHistorySize} title={windowTitle}></Window>
  )
}
