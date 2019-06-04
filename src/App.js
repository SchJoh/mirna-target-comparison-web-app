import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import Layout from './pages/Layout';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

class App extends React.Component {
    render() {
        const { classes } = this.props;
        const theme = createMuiTheme({
            palette: {
                primary: {
                    light: '#4CBAC2',
                    main: '#4CBAC2',
                    dark: '#00363a',
                    contrastText: '#fff',
                },
                secondary: {
                    light: '#4CBAC2',
                    main: '#4CBAC2',
                    dark: '#000063',
                    contrastText: '#fff',
                },
            },
        });

        return (
            <MuiThemeProvider theme={theme}>
                <Layout />
            </MuiThemeProvider>
        );
    }
}

// App.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };

export default withTheme()(App);
