import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class AboutPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Typography component="h2" variant="headline" gutterBottom>
                    About
                </Typography>
                <Typography paragraph>This website is still under construction.</Typography>
            </div>
        );
    }
}

AboutPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);
