import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Female Graduates of All Programs", "Male Graduates of All Programs", "Female Graduates of STEM Programs", "Male Graduates of STEM Programs"],
                datasets: [{
                    data: [67.4, 32.6],
                    label: "University Graduates by Gender",
                  
                    backgroundColor: ['#E80C7A', '#3c4999', '#FFB6C1','rgb(179, 200, 240']
                },
                {
                    data: [39, 61],
                    label: ["Female Graduates of STEM Programs", "Male Graduates of STEM Programs"],
                    backgroundColor: ['#FFB6C1','rgb(179, 200, 240)'],

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
            <div className="chart5">
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: 'University Graduates by Gender: In All Programs vs STEM',
                            fontSize: 35
                        },
                        legend: {
                            display: true,
                        }
                    }}
                />
            </div>
        )

    }
}

export default Chart5;