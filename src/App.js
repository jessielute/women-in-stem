import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart.js';
import Chart2 from './components/Chart2.js';
import Chart3 from './components/Chart3.js';
import Chart4 from './components/Chart4.js';
import Chart5 from './components/Chart5.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {

      }
    }
  }

  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    //webscraper to go here. Ajax?
    this.setState({
      chartData: {
        labels: ['Architecture and Engineering', 'Business, Management and Public Administration', 'Social and Behavioural Sciences', 'Humanities', 'Health and Related Fields', 'Mathematics, Computer and Information Science', ['Physical and Life', 'Sciences and Technologies'], 'Personal, Protective and Transportation Services', 'Visual and Performing Arts and Communications Technologies', 'Education', 'Other Instructional Programs',],
        datasets: [{
          data: [11472, 62754, 54801, 33777, 4290, 13398, 7347, 13386, 25374, 5577, 4386,],
          label: "Female Graduates",
          backgroundColor: '#E80C7A',
        },
        {
          data: [53571, 47397, 22524, 20625, 10821, 10623, 9135, 8097, 7596, 5094, 4833,],
          label: "Male Graduates",
          backgroundColor: 'rgb(179, 200, 240)',

        }]
      }
    })
  }


  render() {
    return (
      <div className="App">
        <nav>
          <div class="nav-wrapper">
            <div className="brand-logo">Women in STEM: Visualize the Future</div>
          </div>
        </nav>

        <p className="openingText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Ut pharetra sit amet aliquam id diam maecenas. Lectus proin nibh nisl condimentum id venenatis. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sed augue lacus viverra vitae congue eu consequat ac. Etiam sit amet nisl purus in mollis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta nibh. Facilisis mauris sit amet massa. Mauris cursus mattis molestie a iaculis at. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Egestas diam in arcu cursus euismod quis viverra. Viverra nam libero justo laoreet. Turpis egestas pretium aenean pharetra magna ac. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.
            </p>
        <div className="chartBorder">
          <Chart5 chartData={this.state.chartData} displayTitle="true" displayLegend="true" legendPosition="right" />
          <p className="chart1Text">Young adults are more and more likely to obtain a university degree, regardless of gender. However, women have made gains much more rapidly than men in recent years. In 1991, the proportion of men and women aged 25 to 34 with a university degree was about the same (at 16%); by 2011, the proportion had increased to 37% among women and 27% among men. As a result, 59% of all university graduates aged 25 to 34 in 2011 were female.

          The share of female university graduates increased in nearly all fields of study, including STEM programs. Hence, in 2011, 39% of STEM university graduates aged 25 to 34 were female, compared to 23% of STEM graduates aged 55 to 64.</p>

          <p className="chart2text">

            Furthermore, women with a STEM degree were particularly concentrated in science and technology programs. Specifically, women accounted for 59% of graduates who had a university degree in science and technology, but accounted for 23% of graduates aged 25 to 34 with a university degree in engineering, and 30% of those with a degree in mathematics and computer science. Thus, 39% of the 132,500 women aged 25 to 34 who had a STEM degree had a background in engineering, mathematics or computer science (Chart 1).Note7 In comparison, 72% of the 206,600 STEM-educated men had a background in these fields (47% in engineering and 25% in mathematics and computer science).</p>
          <Chart chartData={this.state.chartData} displayTitle="true" displayLegend="true" legendPosition="right" />
        </div>
        <div className="chartBorder">
          <Chart2 displayTitle="true" displayLegend="true" legendPosition="bottom" />
          <p className="chart3text">
            Women represented 66% of all non-STEM graduates aged 25 to 34 in 2011 (a proportion that was in the 80% range in health professions and related programs, and in education programs). Women were thus proportionately under-represented among STEM graduates, at least compared with other fields. Men with a STEM university degree were also less likely than non-STEM graduates to be working in occupations requiring a high school education or less—a form of 'skills mismatch'. Among men aged 25 to 34 with a STEM university degree, 12% were in occupations generally requiring a high school diploma or less, compared with 22% among those with a non-STEM university degree. Among women, 18% of STEM graduates were in occupations requiring a high school diploma or less, a percentage that was very similar to that of women with a non-STEM university degree.</p>
        </div>
        <div className="chartBorder">
          <Chart3 displayTitle="true" displayLegend="true" />
          <p className="whatToExpectBox">Ut pharetra sit amet aliquam id diam maecenas. Lectus proin nibh nisl condimentum id venenatis. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Sed augue lacus viverra vitae congue eu consequat ac. Etiam sit amet nisl purus in mollis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Sem et tortor consequat id porta nibh. </p>
        </div>
        <div className="chartBorder">
          <Chart4 displayTitle="true" displayLegend="true" legendPosition="bottom" />
          <div className="closingBox">
            <p>So what are the next steps? We need to hire and inspire women! And I happen to know one who is looking for a job and coded these sweet charts. Just saying.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
