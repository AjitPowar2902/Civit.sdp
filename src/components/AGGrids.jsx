import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import data from "../data/data.json"
import Badges from "./Badges";

export default function AGGrids({columnDefs,rowData,pagination,paginationPageSize,sorting,filter,enableColResize,animateRows,onGridReady,suppressCellSelection,domLayout,defaultColDef,editable,rowSelection,onselectionchange }) {
  return (
    <>
     <div className="" >
       <AgGridReact className="ag-theme-quartz"
       
            columnDefs={columnDefs}
            rowData={rowData}
            pagination={pagination ||true}
            paginationPageSize={paginationPageSize||20}
            sorting={sorting||true}
           // filter={filter||true}
            enableColResize={enableColResize||true}
            animateRows={animateRows|| true}
            editable={editable|| true}
            onGridReady={onGridReady}
            suppressCellSelection={suppressCellSelection||true}
            domLayout={domLayout||'autoHeight'}
            defaultColDef={defaultColDef}
            rowSelection={rowSelection || "multiple"} 
            onSelectionChanged={onselectionchange}
        />
    </div>
      {/* <div className="ag-theme-quartz" // applying the Data Grid theme > <AgGridReact rowData={rowData} columnDefs={colDefs} /> </div> */}
    </>
  );
}
