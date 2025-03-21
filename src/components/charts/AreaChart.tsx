import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import {
  AgChartOptions,
} from "ag-charts-community";


  const ChartExample = ({data}) => {
    const [options, setOptions] = useState<AgChartOptions>({
      title: {
        text: "Sales by Month",
      },
      data: data,
      series: [
        {
          type: "area",
          xKey: "month",
          yKey: "subscriptions",
          yName: "Subscriptions",
          stroke: "blue",
          strokeWidth: 2,
          fill: "lightBlue",
          lineDash:[3,4],
          interpolation: { type: "smooth" },
          fillOpacity: 0.5,
        },
        {
          type: "area",
          xKey: "month",
          yKey: "services",
          // normalizedTo:0,
          // visible: true,
          yName: "Services",
          stroke: "red",
          strokeWidth: 2,
          fill: "pink",
          marker: {
            enabled: true,
            fill: "red",
          },
          // shadow: {enabled:true,}
          connectMissingData: false,
          fillOpacity: 0.5,
          // showInMiniChart: false,
          // interpolation: { type: "smooth", tension: 10 },
        },
        {
          type: "area",
          xKey: "month",
          yKey: "products",
          yName: "Products",
          stroke: "green",
          strokeWidth: 2,
          fill: "lightGreen",
          label: {
            enabled: true,
            fontWeight: "bold",
            formatter: ({ value }) => value.toFixed(0),
          },
          interpolation: { type: "smooth" },
          fillOpacity: 0.5,
        },
      ],
    });
  
    return <AgCharts options={options} />;
  };

export default ChartExample;