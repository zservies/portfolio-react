export interface IWindow {
  size: {
    height: number,
    width: number
  };
  title?: JSX.Element;
  content?: {
    title?: JSX.Element,
    body?: JSX.Element
  };
}