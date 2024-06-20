import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';
import viteLogo from '/vite.svg';
import reactLogo from '../../assets/react.svg';

export const Home = () => {
  const { t, i18n } = useTranslation();

  const [count, setCount] = useState(0);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {i18n.language === 'en' ? (
        <Button label="FR" onClick={() => changeLanguage('fr')} />
      ) : (
        <Button label="EN" onClick={() => changeLanguage('en')} />
      )}
      <h1>{t('welcome')}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};
