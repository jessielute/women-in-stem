import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData

        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'left'
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'left'
    }

    render() {
        return (
            <div className="chart1">
                <HorizontalBar
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: 'Choices: What Canadians Study',
                            fontSize: 40,
                        },
                        layout: {
                            padding: {
                                left: 5,
                                bottom: 5
                            }
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                        }
                    }}
                />
            </div>
        )

    }
}

export default Chart;