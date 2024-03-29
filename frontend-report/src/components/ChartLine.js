import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class ChartLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataLine: props.chartDataLine
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "Cidade"
  };

  render() {
    const { chartDataLine } = this.state;

    return (
      <div className="chart">
        <Line
          data={chartDataLine}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Tendências",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            responsive: true
          }}
        />
      </div>
    );
  }
}

export default ChartLine;
