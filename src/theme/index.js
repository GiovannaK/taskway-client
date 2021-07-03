import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  spacing: 12,
  palette: {
    type: 'light',
    primary: {
      light: '#F2F2F2',
      main: '#FF6495',
      dark: '#52b69a',
    },
    secondary: {
      main: '#361999',
      light: '#ff9100',
      dark: '#7431C9',
      opacity: 'rgba(221,135,61,0.4)',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'verdana', 'sans-serif'",
    fontSize: 14,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.3rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

export default theme;
