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
  <ul>
    <li>
      <h4>Item 1</h4>
    </li>
    <li>
      <h4>Item 2</h4>
    </li>
    <li>
      <h4>Item 3</h4>
    </li>
  </ul>;
  const content = {
    title: <h1>{t('workHistory.title')}</h1>,
    body: employmentList
  };


  
  return (
    <Window content={content} size={workHistorySize} title={t('workHistory.windowTitle')}></Window>
  )
}
