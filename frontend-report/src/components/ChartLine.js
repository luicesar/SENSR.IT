import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class ChartLine extends Component {
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
        <Line
          data={chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Tendências",
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

export default ChartLine;
