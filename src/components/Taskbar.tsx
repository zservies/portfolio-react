import './Taskbar.css';
import { useTranslation } from 'react-i18next';

export default function Taskbar() {
  const { t } = useTranslation();
  // TODO: Need to add tooltips/accessibility for these links.
  return (
    <div className="taskbar-wrapper" title={t('taskbar.githubTooltip')}>
      <a className="taskbar-github" href="https://github.com/zservies" target="_blank">
        <img className="taskbar-img" src="/assets/github-mark-white.png" alt="Github logo" width="75px" height="75px" />
      </a>
      <a className="taskbar-linkedin" href="https://www.linkedin.com/in/zacharyservies/" target="_blank" title={t('taskbar.linkedinTooltip')}>
        <img className="taskbar-img" src="/assets/LI-In-Bug.png" alt="LinkedIn logo" width="75px" height="75px"/>
      </a>
      {/* TODO: Probably need to setup a forwarding address to prevent spam potential. */}
      <a className="taskbar-email" href="mailto: zachservies@gmail.com" title={t('taskbar.emailTooltip')}>
        <img className="taskbar-img" src="/assets/email-icon.png" alt="Email" width="75px" height="75px"/>
      </a>
      <a className="taskbar-cv-resume" href="/assets/resume_2024_ZacharyServies_no_contacts.pdf" target="_blank" title={t('taskbar.cvTooltip')}>
        <img className="taskbar-img" src="/assets/cv.png" alt="CV" width="75px" height="75px"/>
      </a>
      <a className="taskbar-settings" title={t('taskbar.settingsTooltip')}>
        <img className="taskbar-img" src="/assets/settings.png" alt="Settings" width="75px" height="75px"/>
      </a>

    </div>
  )
}

// TODO: Attribute assets. Give them their own window/page?
// /* <a href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a> */
// <a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Stockio - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/curriculum-vitae" title="curriculum vitae icons">Curriculum vitae icons created by kerismaker - Flaticon</a>