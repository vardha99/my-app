import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { useAgGridHelpers } from "../helpers/useAgGridHelpers";
import { defaultColumns, defaultColumns2 } from "../mocks/defaultColumns.tsx";
import clsx from "clsx";
import { H1, Text } from "@salt-ds/core";
import { useEffect, useState } from "react";
import { AgChartOptions } from "ag-charts-community";
import { AgCharts } from "ag-charts-react";

function getData() {
  return [
    { month: "Jan", asset: "SBI", amount: 22000 },
    { month: "Jan", asset: "HDFC", amount: 250000 },
    { month: "Jan", asset: "ICICI", amount: 200000 },
    { month: "Jan", asset: "Axis", amount: 150000 },
    { month: "Jan", asset: "Kotak", amount: 100000 },
    { month: "Feb", asset: "SBI", amount: 240000 },
    { month: "Feb", asset: "HDFC", amount: 25000 },
    { month: "Feb", asset: "ICICI", amount: 210000 },
    { month: "Feb", asset: "Axis", amount: 160000 },
    { month: "Feb", asset: "Kotak", amount: 110000 },
    // ...other months data...
  ];
}

  export function getData2() {
    return [
      { asset: "Stocks", amount: 60000 },
      { asset: "Bonds", amount: 40000 },
      { asset: "Cash", amount: 7000 },
      { asset: "Real Estate", amount: 5000 },
      { asset: "Commodities", amount: 3000 },
    ];
  }
  

const AgGrid = (props: AgGridReactProps) => {
  const { agGridProps, containerProps } = useAgGridHelpers();
  const [rowData,setRowData]=useState();
  const [options, setOptions] = useState<AgChartOptions>({
    data: getData(),
    title: {
      text: "Portfolio Composition",
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",
        innerRadiusRatio: 0.7,
      },
    ],
  });

  useEffect(() => {
    fetch('http://localhost:3000/defaultData')
      .then(response => response.json())
      .then(data => {
        setRowData(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div className={clsx(containerProps.className, {
        "ag-theme-salt-variant-zebra": true,
      })} {...containerProps} >
        <H1>Pagination</H1>
        <Text>Users can move between pages using the controls in the lower right.</Text>
      <AgGridReact
        defaultColDef={{ floatingFilter: true, filter: true}}
        columnDefs={defaultColumns2}
        pagination
        paginationPageSizeSelector={[10,20,30]}
        paginationNumberFormatter={(params) => {
            return " " + params.value;
        }}
        
        paginationPageSize={20}
        rowData={getData()}
        {...agGridProps}
        {...props}
      />
    </div>
    <AgCharts options={options} />
    </>
  );
};

export default AgGrid;