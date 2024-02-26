import { IWindow } from '../interfaces/interfaces';
import './Window.css';

export default function Window(props: IWindow) {
  const body = props.content?.body;
  const contentHeader = props.content?.title;
  const height = props.size.height;
  const width = props.size.width;
  const title = props.title;

  const innerSize = {
    height: height - 50,
    width: width - 50
  };
  return (
    <div className="window-wrapper" style={{ height: `${height}px`, width: `${width}px`}}>
      <div className="window-title-wrapper">
        {title}
      </div>
      <div className="window-buttons">
        <button className="dot-exit"></button>
        <button className="dot-min"></button>
        <button className="dot-max"></button>
      </div>
      <div className="window-content" style={{ height: `${innerSize.height}px`, width: `${innerSize.width}px`}}>
        <div className="window-content-title">
          {contentHeader}
        </div>
        <div className="window-content-body">
          {body}
        </div>
      </div>
    </div>
  )
}
