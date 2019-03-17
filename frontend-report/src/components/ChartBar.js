import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class ChartBar extends Component {
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
        <HorizontalBar
          data={chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Maiores Cidades",
              fontSize: 25
            },
            legend: {
              display: true,
              position: this.props.legendPosition
            },
            responsive: true
          }}
        />
      </div>
    );
  }
}

export default ChartBar;
