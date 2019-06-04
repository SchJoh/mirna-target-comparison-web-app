import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Plot from 'react-plotly.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        borderRadius: 0,
        margin: theme.spacing.unit,
    },
    media: {
        height: 360,
    },
});

class TabContent extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        if (this.props.plot) {
            this.props.plot.layout.width = window.innerWidth * (5 / 8);
            this.props.plot.layout.height = window.innerHeight * (5 / 7);
        }

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={9}>
                        <Card className={classes.card}>
                            {this.props.plot && (
                                <CardContent>
                                    <Plot data={this.props.plot.data} layout={this.props.plot.layout} />
                                </CardContent>
                            )}
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
                                    {this.props.cardTitle}
                                </Typography>
                                <Typography variant="h5" component="h2" />
                                <Typography className={classes.pos} color="textSecondary">
                                    {this.props.cardSubtitle}
                                </Typography>
                                <Typography component="p">{this.props.cardText}</Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.card}>
                            <CardMedia className={classes.media} image={this.props.diagram} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.diagramTitle}
                                </Typography>
                                <Typography component="p">{this.props.diagramText}</Typography>
                            </CardContent>
                        </Card>

                        {this.props.dataLinks && (
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h7" className={classes.title}>
                                        Significant Gene Trail Results
                                    </Typography>
                                    <div className={classes.demo}>
                                        <List dense={true}>
                                            {this.props.dataLinks.map(link => (
                                                <ListItem>
                                                    <a href={link.link} target="_blank">
                                                        <ListItemText primary={link.id} />
                                                    </a>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

TabContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabContent);
