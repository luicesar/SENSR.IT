import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class ChartPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "Cidade"
  };

  render() {
    const { chartData } = this.state;

    return (
      <div className="chart">
        <Pie
          data={chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Maiores Cidades em " + this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default ChartPie;
