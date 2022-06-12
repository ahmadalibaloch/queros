import { createContext, useContext, useState } from 'react';

export const initialState: {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
} = {
  theme: 'dark',
  setTheme: () => {},
};
const AppStateContext = createContext(initialState);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const state = {
    theme,
    setTheme,
  };

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const state = useContext(AppStateContext);

  if (state === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return state;
}
