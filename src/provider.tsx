import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export const LawmowerUIProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};
