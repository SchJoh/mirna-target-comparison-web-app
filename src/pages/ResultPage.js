import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import area2kmer6 from '../assets/networks/6mer_area2_graph.json';
import area3kmer6 from '../assets/networks/6mer_area3_graph.json';
import area4kmer6 from '../assets/networks/6mer_area4_graph.json';
import area1kmer7 from '../assets/networks/7mer_area1_graph.json';

import kmer6fig from '../assets/pictures/hsa_hsa.NoMissmatch_AreaDistribution.png';
import kmer7fig from '../assets/pictures/hsa_hsa.NoMissmatch_Area71Distribution.png';

import TabContent from '../components/TabContent';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const kmer6fig_text =
    'miRNA binding site group similarity compared withUTR pair sequence similarity, complete distribution of all values. x-axis: UTR sequenc similarity y-axis: miRNA binding site groups similarity';

class ResultPage extends React.Component {
    state = {
        value: 1,
    };

    handleChange = (event, value) => {
        if (value === 0) {
            value = 1;
        }
        if (value === 4) {
            value = 5;
        }
        this.setState({ value });
    };

    data1Links = [
        {
            id: 'hubs43-ENSG00000167186:ENST00000321998..19078158-19080095(+)',
            link: 'https://genetrail2.bioinf.uni-sb.de/enrichment_results.html?session=225660c3-0f2f-47e1-bc0e-a61d68c9b90a&file=138760&significance=0.05',
        },
        {
            id: 'hubs42-ENSG00000108384:ENST00000337432..58734222-58735611(+)',
            link: 'https://genetrail2.bioinf.uni-sb.de/enrichment_results.html?session=225660c3-0f2f-47e1-bc0e-a61d68c9b90a&file=138763&significance=0.05',
        },
        {
            id: 'hubs13-ENSG00000170925:ENST00000302917..107980863-107981079(-)',
            link: 'https://genetrail2.bioinf.uni-sb.de/enrichment_results.html?session=225660c3-0f2f-47e1-bc0e-a61d68c9b90a&file=138825&significance=0.05',
        },
        {
            id: 'hubs12-ENSG00000108349:ENST00000264645..40170446-40172183(+)',
            link: 'https://genetrail2.bioinf.uni-sb.de/enrichment_results.html?session=225660c3-0f2f-47e1-bc0e-a61d68c9b90a&file=138836&significance=0.05',
        },
    ];

    data2Links = [
        {
            id: 'hubs83-ENSG00000083844:ENST00000263095..57212981-57222846(+)',
            link: 'https://genetrail2.bioinf.uni-sb.de/enrichment_results.html?session=225660c3-0f2f-47e1-bc0e-a61d68c9b90a&file=138775&significance=0.05',
        },
        {
            id: 'hubs32-ENSG00000108384:ENST00000337432..58734222-58735611(+)',
            link: 'https://genetrail2.bioinf.uni-sb.de/enrichment_results.html?session=225660c3-0f2f-47e1-bc0e-a61d68c9b90a&file=138790&significance=0.05',
        },
    ];

    data3Links = [
        {
            id: 'hubs344-ENSG00000113805:ENST00000263665..74262567-74264400(-)',
            link: 'https://genetrail2.bioinf.uni-sb.de/enrichment_results.html?session=225660c3-0f2f-47e1-bc0e-a61d68c9b90a&file=138861&significance=0.05',
        },
    ];

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Grid item xs={12}>
                <div className={classes.root}>
                    <Tabs value={this.state.value} onChange={this.handleChange} indicatorColor="secondary" textColor="secondary" centered>
                        <Tab label="6mer seed" disabled={true} />
                        <Tab label="Area 2" />
                        <Tab label="Area 3" />
                        <Tab label="Area 4" />
                        <Tab label="7mer seed" disabled={true} />
                        <Tab label="Area 1" />
                    </Tabs>
                    {value === 1 && (
                        <TabContent
                            plot={area2kmer6}
                            diagram={kmer6fig}
                            diagramText={kmer6fig_text}
                            cardTitle={'Scatter Plot description'}
                            cardSubtitle={
                                'Relations Network Scatter Plot. Showing all connected components found for data set from area 2 with threshold value 4. The underlying data is based on miRNA binding site predictions generated with Bowtie v 1.2 containing no missmatch in their 6mer binding sequence.'
                            }
                            cardText={''}
                        />
                    )}
                    {value === 2 && (
                        <TabContent
                            plot={area3kmer6}
                            diagram={kmer6fig}
                            diagramText={kmer6fig_text}
                            cardTitle={'Scatter Plot description'}
                            cardSubtitle={
                                'Relations Network Scatter Plot. Showing all connected components found for data set from area 3 with threshold value 4. The underlying data is based on miRNA binding site predictions generated with Bowtie v 1.2 containing no missmatch in their 6mer binding sequence.'
                            }
                            cardText={''}
                        />
                    )}
                    {value === 3 && (
                        <TabContent
                            plot={area4kmer6}
                            diagram={kmer6fig}
                            diagramText={kmer6fig_text}
                            cardTitle={'Scatter Plot description'}
                            cardSubtitle={
                                'Relations Network Scatter Plot. Showing all connected components found for data set from area 4 with threshold value 4. The underlying data is based on miRNA binding site predictions generated with Bowtie v 1.2 containing no missmatch in their 6mer binding sequence.'
                            }
                            cardText={''}
                        />
                    )}
                    {value === 5 && (
                        <TabContent
                            plot={area1kmer7}
                            diagram={kmer7fig}
                            diagramText={kmer6fig_text}
                            cardTitle={'Scatter Plot description'}
                            cardSubtitle={
                                'Relations Network Scatter Plot. Showing all connected components found for data set from area 1 with threshold value 4. The underlying data is based on miRNA binding site predictions generated with Bowtie v 1.2 containing no missmatch in their 7mer binding sequence.'
                            }
                            cardText={''}
                        />
                    )}
                </div>
            </Grid>
        );
    }
}

ResultPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultPage);
