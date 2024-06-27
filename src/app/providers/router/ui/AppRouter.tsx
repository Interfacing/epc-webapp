import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';

export default function AppRouter() {
  return (
    <Routes>
      // todo: implement lazy loading for pages with suspense
      {Object.values(routeConfig).map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
}
