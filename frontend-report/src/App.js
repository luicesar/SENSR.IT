import React, { Component } from "react";
import ChartBar from "./components/ChartBar";
import ChartLine from "./components/ChartLine";
import ChartPie from "./components/ChartPie";
import ChartBarGroup from "./components/ChartBarGroup";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      chartDataLine: {},
      chartDataPie: {},
      chartDataGroup: {}
    };
  }

  componentWillMount() {
    this.getChartData();
    this.getChartDataLine();
    this.getChartDataPie();
    this.getChartDataGroup();
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
            label: "População",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(21, 224, 24, 1)",
              "rgba(0, 154, 191, 1)",
              "rgba(217, 149, 40, 1)",
              "rgba(241, 100, 34, 1)",
              "rgba(191, 32, 47, 1)",
              "rgba(104, 45, 145, 1)",
              "rgba(8, 159, 119, 1)"
            ]
          }
        ]
      }
    });
  }

  getChartDataGroup() {
    // Ajax calls here
    this.setState({
      chartDataGroup: {
        labels: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ],
        datasets: [
          {
            data: [
              133,
              221,
              783,
              2478,
              183,
              291,
              853,
              2978,
              233,
              331,
              693,
              1568
            ],
            label: "Telefonia",
            backgroundColor: "rgba(21, 224, 24, 1)"
          },
          {
            label: "Suporte TI",
            data: [408, 547, 675, 734, 747, 275, 454, 247, 845, 394, 487, 575],
            backgroundColor: "rgba(0, 154, 191, 1)"
          },
          {
            label: "Suporte Servers",
            data: [508, 647, 875, 934, 247, 675, 335, 797, 375, 634, 397, 505],
            backgroundColor: "rgba(217, 149, 40, 1)"
          }
        ]
      }
    });
  }

  getChartDataLine() {
    // Ajax calls here
    this.setState({
      chartDataLine: {
        labels: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ],
        datasets: [
          {
            label: "População",
            data: [
              617594,
              181045,
              153060,
              106519,
              105162,
              95072,
              517594,
              781045,
              353060,
              189990,
              205162,
              68172
            ],
            fill: false,
            borderColor: "#3e95cd",
            backgroundColor: [
              "rgba(21, 224, 24, 1)",
              "rgba(0, 154, 191, 1)",
              "rgba(217, 149, 40, 1)",
              "rgba(21, 224, 24, 1)",
              "rgba(0, 154, 191, 1)",
              "rgba(217, 149, 40, 1)",
              "rgba(21, 224, 24, 1)",
              "rgba(0, 154, 191, 1)",
              "rgba(217, 149, 40, 1)",
              "rgba(21, 224, 24, 1)",
              "rgba(0, 154, 191, 1)",
              "rgba(217, 149, 40, 1)"
            ]
          }
        ]
      }
    });
  }

  getChartDataPie() {
    // Ajax calls here
    this.setState({
      chartDataPie: {
        labels: ["SIM", "NÃO"],
        datasets: [
          {
            label: "Enquete",
            data: [61794, 35972],
            backgroundColor: ["rgba(0, 154, 191, 1)", "rgba(217, 149, 40, 1)"]
          }
        ]
      }
    });
  }

  render() {
    const {
      chartData,
      chartDataLine,
      chartDataPie,
      chartDataGroup
    } = this.state;

    return (
      <div className="App">
        <ChartBar
          chartData={chartData}
          location="Brasília"
          legendPosition="bottom"
        />
        <ChartLine
          chartDataLine={chartDataLine}
          location="Mato Grosso"
          legendPosition="bottom"
        />
        <ChartPie
          chartDataPie={chartDataPie}
          location="SIM"
          legendPosition="bottom"
        />
        <ChartBarGroup
          chartDataGroup={chartDataGroup}
          location="Telefonia"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
