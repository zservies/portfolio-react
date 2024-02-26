export interface IWindow {
  size: {
    height: number,
    width: number
  };
  title?: string;
  content?: {
    title?: JSX.Element,
    body?: JSX.Element
  };
}