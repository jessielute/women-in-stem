import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

class Chart4 extends Component {
    constructor(props){
        super(props);
        this.state= {
            chartData: {
                labels: ['Chart1', 'Chart2', 'Chart3', 'Chart4', 'Chart5'],
                datasets:[{
                    fill:false,
                    data:[
                        6,
                        9,
                        15,
                        18,
                        23,
                    ],
                    backgroundColor: [
                        '#E80C7A',
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
            <div className= "chart4">
<Line
data= {this.state.chartData}
options={{
    responsive: true,
    maintainAspectRatio: false,
title: {
display: this.props.displayTitle,
text: 'On the Bright Side, the Number of Women in STEM Fields has Risen Steadily.',
fontSize:25 
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

export default Chart4;