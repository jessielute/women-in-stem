import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart3 extends Component {
    constructor(props){
        super(props);
        this.state= {
            chartData: {
                labels: ['Chart1', 'Chart2', 'Chart3', 'Chart4', 'Chart5'],
                datasets:[{
                    data:[
                        10,
                        5,
                        19,
                        6,
                        7,
                    ],
                    backgroundColor: [
                        '#E80C7A',
                        '#b03060',
                        '#ffc0cb',
                        '#ff69b4',
                        '#db7093'
                    ]
                }]
            }
        }
      }
      static defaultProps = {
          displayTitle: true,
          displayLegend: true,
          legendPosition: 'left'
      }
    render(){
        return (
            <div className= "chart3">
<Bar
data= {this.state.chartData}
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
text: 'The Wage Gap in STEM.',
fontSize:35
},
legend: {
display:this.props.displayLegend,
position:this.props.legendPosition,
}
}}
/>
            </div>
        )

    }
}

export default Chart3;