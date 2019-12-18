import React from 'react';
import ColorBox from './color-components/ColorBox';
import SelectColors from './color-components/SelectColors';
import { ColorProvider } from './context/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
