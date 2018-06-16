import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Science', 'Technology', 'Engineering', 'Mathematics and Computer Science'],
                datasets: [{
                    data: [49100, 49700, 61000, 54900],
                    label: "Women's Median Salaries",
                    backgroundColor: '#FF8B94',
                },
                {
                    data: [55300, 54600, 66300, 60800],
                    label: "Men's Median Salaries",
                    backgroundColor: '#A8E6CF',

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
            <div className="chart3">
                <Bar
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: 'The Wage Gap in STEM',
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

export default Chart3;