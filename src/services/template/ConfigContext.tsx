import React from 'react';

import { Config } from './withConfig';

const ConfigContext = React.createContext<Config>({});

interface ConfigProviderProps {
  children: React.ReactNode;
  value: Config;
}

export function ConfigProvider({ value, children }: ConfigProviderProps) {
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export const useConfig = () => React.useContext(ConfigContext);
