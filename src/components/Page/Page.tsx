import clsx from 'clsx';
import { FC, ReactNode, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Topbar from '../Topbar';

type Props = {
  children?: ReactNode;
};

const Page: FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<'dark' | 'light'>('light');
  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }

  const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <Layout>
      <Topbar setDarkMode={toggleMode} darkMode={mode} />

      <main className={clsx(`flex w-full justify-center`)} data-theme={mode}>
        <section>{children}</section>
      </main>
    </Layout>
  );
};

export default Page;
