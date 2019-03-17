import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class ChartPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataPie: props.chartDataPie
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "Enquete"
  };

  render() {
    const { chartDataPie } = this.state;

    return (
      <div className="chart">
        <Pie
          type="doughnut"
          data={chartDataPie}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Enquetes",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            cutoutPercentage: 50,
            responsive: true
          }}
          width={100}
          height={30}
        />
      </div>
    );
  }
}

export default ChartPie;
