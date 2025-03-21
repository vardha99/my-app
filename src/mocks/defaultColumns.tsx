import type { ColDef } from "ag-grid-community";
import { Link } from "react-router-dom";

import type { ICellRendererParams } from "ag-grid-community";

const NameCellRender = (props: ICellRendererParams) => {
  console.log(props);
  
    return (
      <Link to={`/user/${props.data.user_id}`}>
      {props.value}
    </Link>
    )
}

export const defaultColumns: ColDef[] = [
  {
    headerName: "",
    field: "on",
    width: 70,
    flex: 1,
    checkboxSelection: true,
    headerCheckboxSelection: true,
    pinned: "left",
    suppressHeaderMenuButton: true,
    suppressHeaderFilterButton: true,
    resizable: false,
    suppressColumnsToolPanel: true,
    sortable: false,
    filter: false,
  },
  {
    headerName: "Name",
    field: "name",
    filterParams: {
      buttons: ["reset", "apply"],
    },
    editable: false,
    filter: true,
    floatingFilter: true,
    cellRenderer: NameCellRender,
  },
  {
    headerName: "Age",
    field: "age",
    filter: true,
    floatingFilter: true,
  },
  {
    headerName: "Email",
    field: "email",
    filter: true,
    floatingFilter: true,
  },
  {
    headerName: "phone_number",
    field: "phone_number",
    cellClass: ["numeric-cell", "editable-cell"],
    filter: true,
    floatingFilter: true,
  },
  {
    headerName: "Gender",
    field: "gender",
    filter: true,
    floatingFilter: true,
  },
  {
    headerName: "Country",
    field: "country",
    filter: true,
    floatingFilter: true,
  }
];

// defaultColumns.js
export const defaultColumns2 = [
  { field: 'month', headerName: 'Month', sortable: true, filter: true },
  { field: 'SBI', headerName: 'SBI', sortable: true, filter: true, valueFormatter: currencyFormatter },
  { field: 'HDFC', headerName: 'HDFC', sortable: true, filter: true, valueFormatter: currencyFormatter },
  { field: 'ICICI', headerName: 'ICICI', sortable: true, filter: true, valueFormatter: currencyFormatter },
  { field: 'Axis', headerName: 'Axis', sortable: true, filter: true, valueFormatter: currencyFormatter },
  { field: 'Kotak', headerName: 'Kotak', sortable: true, filter: true, valueFormatter: currencyFormatter },
];

// Helper function to format numbers as currency
function currencyFormatter(params: { value: number }) {
  return params.value ? params.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) : '';
}
