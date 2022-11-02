import React from 'react';

export interface BoxInterface {
  color?: string;
  children: React.ReactNode;
}

const Box = ({ children, color }: BoxInterface) => {
  return <div style={{ color: color }}>{children}</div>;
};

export default Box;
