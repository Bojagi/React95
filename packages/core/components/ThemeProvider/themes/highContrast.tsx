import { DefaultTheme, IColors } from 'styled-components';
import BaseTheme, { generateShadows } from './baseTheme';

const colors: IColors = {
  anchor: '#1034a6',
  anchorVisited: '#440381',
  borderDark: '#888c8f',
  borderDarkest: '#ffffff',
  borderLight: '#dfe0e3',
  borderLighter: '#ededef',
  borderLightest: '#f5f5f6',
  canvas: '#353535',
  canvasText: '#ffffff',
  canvasTextDisabled: '#888c8f',
  canvasTextDisabledShadow: '#ffffff',
  canvasTextInvert: '#ffffff',
  headerBackground: '#8e0284',
  headerNotActiveBackground: '#7f7f7f',
  headerNotActiveText: '#ced0cf',
  headerText: '#ffffff',
  material: '#000000',
  materialDark: '#9a9e9c',
  materialText: '#ffffff',
  materialTextDisabled: '#888c8f',
  materialTextDisabledShadow: '#ffffff',
  materialTextInvert: '#ffffff',
  progress: '#8e0284',
  inputBackground: '#353535',
  inputBackgroundDisabled: '#dfe0e3',
  tooltip: '#fefbcc',
};

const highContrast: DefaultTheme = {
  ...BaseTheme,
  colors,
  shadows: generateShadows(colors),
};

export default highContrast;
