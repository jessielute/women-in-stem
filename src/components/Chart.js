import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state= {
            chartData: props.chartData
        
        }
    }
        static defaultProps = {
            displayTitle: true,
            displayLegend: true,
            legendPosition: 'left'
        }

/*class Chart extends Component {
    constructor(props){
        super(props);
        this.state= {
            chartData: {
                labels: ['Architecture and Engineering', 'Business, Management and Public Administration', 'Social and Behavioural Sciences', 'Humanities', 'Health and Related Fields', 'Mathematics, Computer and Information Science', 'Physical and Life Sciences and Technologies', 'Personal, Protective and Transportation Services', 'Visual and Performing Arts and Communications Technologies', 'Education', 'Other Instructional Programs', 'Agriculture, Natural Resources and conservation', 'Personal Improvement and Leisure'],
                datasets: [{
                    data: [11472, 62754, 54801, 33777, 4290, 13398, 7347, 13386, 25374, 5577, 4386, 1350],
                    label: "Female Graduates",
                    backgroundColor: '#E80C7A',
                },
                {
                    data: [53571, 47397, 22524, 20625, 10821, 10623, 9135, 8097, 7596, 5094, 4833, 1035],
                    label: "Male Graduates",
                    backgroundColor: 'rgb(179, 200, 240)',*/
        
        static defaultProps = {
            displayTitle: true,
            displayLegend: true,
            legendPosition: 'left'
        }
    
    render(){
        return (
            <div className= "chart1">
<HorizontalBar
data= {this.state.chartData}
options={{
    responsive: true,
    maintainAspectRatio: false,
title: {
display: this.props.displayTitle,
text: 'Choices: What Canadians Study',
fontSize:40, 
},
layout: {
    padding: {
      left: 5,
      bottom: 5
    }
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

export default Chart;