export type TRouterItem = {
  path: string;
  component: JSX.Element;
  children?: TRouterItem[];
};
