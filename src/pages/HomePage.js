import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Paper, Typography, Link } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import Results from './ResultPage';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        borderRadius: 0,
        margin: theme.spacing.unit,
        padding: theme.spacing.unit,
    },
    card: {
        borderRadius: 0,
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 2,
    },
});

class HomePage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h4" component="h3">
                                    Websites description
                                </Typography>
                                <Typography component="p">
                                    This website contains network scatter plots, which are a result of the analysis of comparing sequences of miRNA binding site predictions based
                                    on their corresponding untranslated regions. Furthermore this simple website gives the user the ability to explore this networks even further
                                    and see potential discovered relations between miRNA regulated genes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h4" component="h3">
                                    Abstract
                                </Typography>
                                <Typography component="p">
                                    The important role of non-coding RNAs is widely admitted. Especially the regulatory features of microRNAs (miRNAs) and their participation in
                                    gene regulatory processes is a crucial part of current studies on cellular processes and genetic diseases. In particular they are capable of
                                    down regulating messengerRNA (mRNA) translation and hence effect all post transcriptional processes.
                                </Typography>
                                <Typography component="p">
                                    Generally multiple miRNAs are involved in the regulation of gene expression, which can be identified by investigating predictions of miRNA:mRNA
                                    interactions and consider related gene regulatory networks. The discovery of pathways, in which the miRNAs participate, are the key to fully
                                    understand their impact and regulatory functions.
                                </Typography>
                                <Typography component="p">
                                    In order to infer miRNA pathways not by considering gene regulatory networks, but by comparing sequences of predicted miRNA:mRNA interactions
                                    and hence deduce miRNA pathways, we implemented a different approach. This approach determines similarity, by comparing pairs of particular
                                    sequences of predicted miRNA binding sites.Moreover it considers feasible network relations and extract potential pathways, between comparison
                                    of miRNA binding site sequences of corresponding highly different untranslated regions (UTRs). Furthermore, homologous information have been
                                    incorporated to compare sequences of miRNA binding sites of different species.
                                </Typography>
                                <Typography component="p">
                                    In total we investigated 4,570 different miRNAs to find 431,172,548 predicted binding sites at 48,250 different UTR sequences within the human
                                    and mouse genomes. In addition we grouped the miRNAs based on their corresponding predicted UTR binding positions and computed alignments to
                                    obtain similarity information. The usage of discovered multiple miRNA targets in several network analyses revealed 59 connected components (CC),
                                    whereas no CC significantly appeared in any of the downstream executed enrichment analysis and hence revealed potential, gene regulatory
                                    networks, that have not been not annotated and investigated so far.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
