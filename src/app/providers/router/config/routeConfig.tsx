import { Page } from "../../../../components/Page/Page";
import { Home } from "../../../../pages/Home";
import { AppRoutesProps } from "../../../types/router";

// todo: implement dynamic routes configuration depends on module, state, page type, etc.
export const routeConfig: Record<string, AppRoutesProps> = {
  'HOME': {
    path: '/',
    element: <Home />,
  },
  'PAGE': {
    path: '/page',
    element: <Page />,
  },
};
