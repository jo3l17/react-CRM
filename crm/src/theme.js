import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';
const palette = {
    primary: blue,
    secondary: green,
    error: red
}

const theme = createMuiTheme({
    palette: {
        primary: {
            light: palette.primary[300],
            main: palette.primary[500],
            dark: palette.primary[700],
        },
        secondary: {
            light: palette.secondary.A200,
            main: palette.secondary.A400,
            dark: palette.secondary.A700,
        },
        error: {
            light: palette.error[300],
            main: palette.error[500],
            dark: palette.error[700],
        },
        contrastThreshold: 3,
    }
})
export default theme;