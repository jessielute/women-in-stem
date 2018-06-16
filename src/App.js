import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart.js';
import Chart2 from './components/Chart2.js';
import Chart3 from './components/Chart3.js';
import Chart4 from './components/Chart4.js';
import Chart5 from './components/Chart5.js';
import Chart6 from './components/Chart6.js';

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
        labels: ['Architecture and Engineering', ['Business Management and ', 'Public Administration'], ['Social and Behavioural', 'Sciences'], 'Humanities', 'Health and Related Fields', 'Mathematics', ['Computer and', 'Information Science'], ['Physical and Life', 'Sciences and Technologies'], ['Personal, Protective and', 'Transportation Services'], ['Visual and Performing Arts', ' and Communication Technologies'], 'Education', 'Other Instructional Programs',],
        datasets: [{
          data: [11472, 62754, 54801, 33777, 4290, 13398, 7347, 13386, 25374, 5577, 4386,],
          label: "Female Graduates",
          backgroundColor: '#FF8B94',
        },
        {
          data: [53571, 47397, 22524, 20625, 10821, 10623, 9135, 8097, 7596, 5094, 4833,],
          label: "Male Graduates",
          backgroundColor: '#A8E6CF',

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
          In Canada and elsewhere in the world, encouraging university students to choose a program in science, technology, engineering, mathematics and computer science (known as 'STEM' programs) has long been a defining outcome of national innovation strategies.
  
  The focus on STEM degrees can be related to how they would contribute to a country’s competitiveness and economic prosperity. Given the scope and nature of their labour market activities–for instance, by engaging in research and development or other knowledge-enhancing activities–STEM graduates are considered key inputs of the national innovation system. At the individual level, previous reports have also suggested that a STEM degree would lead to better labour market conditions and higher earnings, especially for those with a background in engineering and computer science.
  
  That said, and despite the advances made in recent years, women remain less likely to choose a career in STEM areas, and more particularly in engineering, mathematics and computer science. This stands in contrast to nearly all other fields of study, where women now represent the vast majority of graduates—especially health and social science programs. Why are women staying away from STEM programs?
  
  This article examines gender differences in program choice and graduation. First, it profiles differences between men and women among recent STEM university graduates aged 25 to 34, using data from the 2011 National Household Survey (NHS). It also examines whether STEM university graduates have better labour market outcomes than non-STEM university graduates.
            </p>
        <div className="chartBorder">
          <Chart5 chartData={this.state.chartData} displayTitle="true" displayLegend="true" legendPosition="right" />
          <p className="chart1Text">Young adults are more and more likely to obtain a university degree, regardless of gender. However, women have made gains much more rapidly than men in recent years. In 1991, the proportion of men and women aged 25 to 34 with a university degree was about the same (at 16%); by 2011, the proportion had increased to 37% among women and 27% among men. As a result, 59% of all university graduates aged 25 to 34 in 2011 were female.

          The share of female university graduates increased in nearly all fields of study, including STEM programs. Hence, in 2011, 39% of STEM university graduates aged 25 to 34 were female, compared to 23% of STEM graduates aged 55 to 64.</p>

          <p className="chart2text">

            Furthermore, women with a STEM degree were particularly concentrated in science and technology programs. Specifically, women accounted for 59% of graduates who had a university degree in science and technology, but accounted for 23% of graduates aged 25 to 34 with a university degree in engineering, and 30% of those with a degree in mathematics and computer science. Thus, 39% of the 132,500 women aged 25 to 34 who had a STEM degree had a background in engineering, mathematics or computer science (Chart 1). In comparison, 72% of the 206,600 STEM-educated men had a background in these fields (47% in engineering and 25% in mathematics and computer science).</p>
          <Chart chartData={this.state.chartData} displayTitle="true" displayLegend="true" legendPosition="right" />
        </div>
        <div className="chartBorder">
          <Chart2 displayTitle="true" displayLegend="true" legendPosition="bottom" />
          <p className="chart3text">
            Women represented 66% of all non-STEM graduates aged 25 to 34 in 2011 (a proportion that was in the 80% range in health professions and related programs, and in education programs). Women were thus proportionately under-represented among STEM graduates, at least compared with other fields. Men with a STEM university degree were also less likely than non-STEM graduates to be working in occupations requiring a high school education or less—a form of 'skills mismatch'. Among men aged 25 to 34 with a STEM university degree, 12% were in occupations generally requiring a high school diploma or less, compared with 22% among those with a non-STEM university degree. Among women, 18% of STEM graduates were in occupations requiring a high school diploma or less, a percentage that was very similar to that of women with a non-STEM university degree.</p>
        </div>
        <div className="chartBorder">
          <Chart3 displayTitle="true" displayLegend="true" />
          <p className="chart4text">The suggestion that STEM programs would also lead to better-paying jobs is often used as a selling point to encourage more youth to pursue such programs. According to the NHS, this was true, but even more so for men: in 2010, men aged 25 to 34 who had a STEM university degree and were employed on a full-time and full-year basis earned a median of $62,300, versus $56,000 for those who graduated from non-STEM programs.The gap was smaller among university-educated women: STEM graduates employed full-time, full-year, had median salaries and wages of $53,200, compared with $50,200 for non-STEM graduates.
</p>
        </div>
        <div className="chartBorder">
          <Chart4 displayTitle="true" displayLegend="true" legendPosition="bottom" />
          <Chart6 displayTitle="true" displayLegend="true" legendPosition="bottom" />
          <div className="closingBox">
            <p>So what are the next steps? We need to hire and inspire women! And I happen to know one who is looking for a job and coded these sweet charts. Just saying.
            </p>
          </div>
          <ul>SOURCES:</ul>
          <ul><a className="Sources" href="https://www150.statcan.gc.ca/n1/pub/75-006-x/2013001/article/11874-eng.htm">Stats Canada</a></ul>
          <ul><a className="Sources" href="https://www.census.gov/content/dam/Census/newsroom/releases/2013/cb13-162_stem_female.pdfUS Census">US Census</a></ul>
        </div>
      </div>

    );
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
      <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  }
}

export default App;
