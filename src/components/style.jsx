import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: grey[50],
      secondary: grey[900],
    },
    primary: { main: grey[50] },
    secondary: {
      main: lightBlue[600], 
      contrastText: grey[50] 
    }
  },
  typography: {
    fontFamily: [
      "serif"
    ]
  }
});

const style = (theme) => ({
    link: {
        padding: theme.spacing.unit,
    }
});

export { theme, style };