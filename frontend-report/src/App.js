import React, { Component } from "react";
import ChartBar from "./components/ChartBar";
import ChartLine from "./components/ChartLine";
import ChartPie from "./components/ChartPie";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      chartDataLine: {}
    };
  }

  componentWillMount() {
    this.getChartData();
    this.getChartDataLine();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "São Paulo",
          "Mato Grosso",
          "Goiás",
          "Brasília",
          "Santa Catarina",
          "Rio de Janeiro"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }

  getChartDataLine() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <ChartBar
          chartData={this.state.chartData}
          location="Brasília"
          legendPosition="bottom"
        />
        <ChartLine
          chartData={this.state.chartData}
          location="Mato Grosso"
          legendPosition="bottom"
        />
        <ChartPie
          chartData={this.state.chartData}
          location="Goiás"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
