import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class ChartBarGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataGroup: props.chartDataGroup
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "Atendimento"
  };

  render() {
    const { chartDataGroup } = this.state;

    return (
      <div className="chart">
        <Bar
          data={chartDataGroup}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Atendimentos",
              fontSize: 25
            },
            legend: {
              display: this.props.displayTitle,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default ChartBarGroup;
