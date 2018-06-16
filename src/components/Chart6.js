import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['1970', '1980', '1990', '2000', '2011'],
                datasets: [{
                    fill: false,
                    data: [14, 20, 34, 29, 27,],
                    borderColor:
                        '#FF8B94',
                    backgroundColor:
                        '#FF8B94',
                    label: "Women in Computer Science",
                },
                {
                    fill: false,
                    data: [3, 5, 12, 12.5, 13,],
                    borderColor:
                        '#FFAAA5',
                    backgroundColor:
                        '#FFAAA5',
                    label: "Women in Engineering",
                },
                {
                    fill: false,
                    data: [14, 22, 27, 39, 41,],
                    borderColor:
                        '#FFD3B6',
                    backgroundColor: '#FFD3B6',
                    label: "Women in Life Science",
                },
                {
                    fill: false,
                    data: [15, 38, 41, 44, 47,],
                    borderColor:
                        '#67EDBE',
                    backgroundColor: '#67EDBE',
                    label: "Women in Mathematics",
                },
                {
                    fill: false,
                    data: [17, 23, 51, 40, 61,],
                    borderColor: '#A8E6CF',
                    backgroundColor: '#A8E6CF',
                    label: "Women in Social Science",
                }
                ]
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
            <div className="chart6">
                <Line
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: '...But the Number of Women in Computer Science has Actually Declined.',
                            fontSize: 25
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

export default Chart6;