import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';

class Chart4 extends Component {
    constructor(props){
        super(props);
        this.state= {
            chartData: {
               
                labels: ['1970', '1980', '1990', '2000', '2011'],
                datasets: [{
                    fill: false,
                    data: [7, 14, 23, 25, 26, ],
                    label: "Percent of Women in STEM Fields",
                    backgroundColor: '#FF8B94',
                },
                {
                    fill: false,
                    data: [36, 42, 45, 47, 48,],
                    label: "Percent of Total Workforce Comprised of Women",
                    backgroundColor: '#FFB6C1',

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