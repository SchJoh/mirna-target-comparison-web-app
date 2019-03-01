import React, { Component } from 'react';
import './App.css';

import data1 from './assets/networks/B2M0Similarity.json';
import data2 from './assets/networks/overlap.json'; //import data2 from './assets/networks/B2M0overlap.json';
import Plot from 'react-plotly.js';

import data1plot1 from './assets/plots/NMBM2.M0.T0.similarity_similarity.png';
import data1plot2 from './assets/plots/NMBM2.M0.T0.upperlower_similarity_similarity.png';
import data2plot1 from './assets/plots/NMBM2.M0.T0.similarity_overlap.png';
import data2plot2 from './assets/plots/NMBM2.M0.T0.upperlower_similarity_overlap.png';

import { PivotItem, IPivotItemProps, Pivot } from 'office-ui-fabric-react/lib/Pivot';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Label } from 'office-ui-fabric-react/lib/Label';

import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import './styles/fabric.min.css';
import NavBar from './Navbar.js';

import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);

class App extends React.Component {
    render() {
        const imageProps = {
            width: 350,
            maximizeFrame: true,
        };
        data1.layout.width = data2.layout.width = window.innerWidth * (3 / 5);
        data1.layout.height = data2.layout.height = window.innerHeight * (9 / 10);
        data1.layout.autosize = data2.layout.autosize = false;
        return (
            <Fabric className="App">
                <div className="ms-Grid" dir="ltr">
                    <div className="ms-Grid-row">
                        <NavBar />
                    </div>
                    <br />
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                            <Pivot style={{ textAlign: 'center' }}>
                                <PivotItem headerText={'mature miRNA name identifier similarity'} itemIcon="BarChart4">
                                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3">
                                        <Label>miRNA vs utr alignment</Label>
                                        <Image src={data1plot1} {...imageProps} alt="Example implementation with no image fit property and no height or width is specified." />
                                        <br />
                                        <Label>miRNA vs utr alignment only upper lower values</Label>
                                        <Image src={data1plot2} {...imageProps} alt="Example implementation with no image fit property and no height or width is specified." />
                                        <Label>
                                            X-axis: miRNA similarity <br />
                                            Y-axis: utr similarity <br />
                                        </Label>
                                    </div>
                                    <div className="ms-Grid-col ms-sm9 ms-md9 ms-lg9">
                                        <Plot data={data1.data} layout={data1.layout} />
                                    </div>
                                </PivotItem>
                                <PivotItem headerText={'mature miRNA name identifier overlap'} itemIcon="BarChart4">
                                    <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3">
                                        <Label>miRNA vs utr alignment</Label>
                                        <Image src={data2plot1} {...imageProps} alt="Example implementation with no image fit property and no height or width is specified." />
                                        <br />
                                        <Label>miRNA vs utr alignment only upper lower values</Label>
                                        <Image src={data2plot2} {...imageProps} alt="Example implementation with no image fit property and no height or width is specified." />
                                        <Label>
                                            X-axis: miRNA overlap <br />
                                            Y-axis: utr similarity <br />
                                        </Label>
                                    </div>
                                    <div className="ms-Grid-col ms-sm9 ms-md9 ms-lg9">
                                        <Plot data={data2.data} layout={data2.layout} />
                                    </div>
                                </PivotItem>
                            </Pivot>
                        </div>
                    </div>
                </div>
                <div />
            </Fabric>
        );
    }
}

export default App;
