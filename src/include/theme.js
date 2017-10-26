import { createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: purple, // Purple and green play nicely together.
        secondary: green,
        error: red,
    },
});

export default theme;