import React from 'react';
import ColorBox from './context/ColorBox';
import { ColorProvider } from './context/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
