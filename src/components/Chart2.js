import React, { Component } from 'react';
import { Bar} from 'react-chartjs-2';

class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Graduates of Science and technology", "Graduates of Engineering", "Graduates of Mathematics and computer science"],
                datasets: [{
                    data: [80.5, 29.4, 22.6],
                    label: "Female Graduates",
                    backgroundColor: '#E80C7A'
                },
                {
                    data: [57, 97.9, 51.8],
                    label: "Male Graduates",
                    backgroundColor: 'rgb(179, 200, 240)',

                }]
            }
        }
    }
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'left'
    }

    render() {
        return (
            <div className="chart2">
                <Bar
                    data={this.state.chartData}
                    options={{
                        scales: {
                            xAxes: [{
                                stacked: true
                            }],
                            yAxes: [{
                                stacked: true
                            }]
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: 'Comparing Female and Male Graduates of the STEM Fields',
                            fontSize: 35
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

export default Chart2;