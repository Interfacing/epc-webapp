import { Page } from "../../../../components/Page/Page";
import { Home } from "../../../../pages/Home";

// todo: implement dynamic routes configuration depends on module, state, page type, etc.
export const routeConfig = {
  'HOME': {
    path: '/',
    element: <Home />,
  },
  'PAGE': {
    path: '/page',
    element: <Page />,
  },
};
