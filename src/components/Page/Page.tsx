import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import Layout from '../Layout';
import Topbar from '../Topbar';
import { useAppState } from '@/context/AppContext';

type Props = {
  children?: ReactNode;
};

const Page: FC<Props> = ({ children }) => {
  const { theme, setTheme } = useAppState();

  return (
    <Layout>
      <Topbar setTheme={setTheme} theme={theme} />

      <main
        className={clsx(`w-full flex-col justify-center`)}
        data-theme={theme}
      >
        {children}
      </main>
    </Layout>
  );
};

export default Page;
