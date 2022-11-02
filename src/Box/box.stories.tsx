import * as React from 'react';
import Box from './index';

export default {
  title: 'Component/Box',
};

export const WithText = () => (
  <Box>
    <h2>This is a placeholder</h2>
  </Box>
);

export const WithButtons = () => (
  <Box>
    <button onClick={() => alert('You clicked me!')}>Click me</button>
  </Box>
);
