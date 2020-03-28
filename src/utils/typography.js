import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';

noriegaTheme.bodyFontFamily = ['Lato'];
noriegaTheme.headerFontFamily = ['Lato'];

const typography = new Typography(noriegaTheme);

typography.injectStyles();

export default typography;
