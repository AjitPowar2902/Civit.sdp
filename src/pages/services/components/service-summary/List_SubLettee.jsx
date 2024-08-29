import React, { useState, useMemo, useCallback, useEffect } from "react";
import "../../../../styles/Global.scss";
import { Container, Row, Col, Card, Form, Badge } from "react-bootstrap";
import plotServiceSummary from "../../../../services/plot-service-summary.js";
import AGGrids from "../../../../components/AGGrids.jsx";
import NoData from "../../../error-pages/NoData.jsx";
export default function List_SubLetter({ plotId }) {
  const [datatable, setDatatable] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "PlotName",
      headerName: "Sub Lettee Name",
      floatingFilter: true,
    },
    {
      field: "OnGoingApplications",
      headerName: "Sub Lettee Contact No.",
      floatingFilter: true,
      //filter: "agDateColumnFilter",
    },
    {
      field: "PendingApplications",
      headerName: "Sub Lettee E-Mail",
      //filter: "agDateColumnFilter",
      floatingFilter: true,
    },
    {
      field: "SuggestedApplications",
      headerName: "Plot Area(sq.ft.)",
      // floatingFilter: true,
      filter: "agNumberColumnFilter",
    },
    {
      field: "ApprovedApplications",
      headerName: "From Date",
      floatingFilter: true,
    },
  ]);
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      width: "auto",
      editable: true,
      filter: true,
      floatingFilter: true,
    }),
    []
  );

  useEffect(() => {
    const fetchServiceRequestSummary = async () => {
      try {
        const response = await plotServiceSummary.getSubLettee(plotId);
        console.log("from sublettee", response);
        setDatatable(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchServiceRequestSummary();
  }, []);

  const onGridReady = useCallback((params) => {
    setRowData(datatable);
    console.log("onreadygrid datatable", datatable);
  });

  const onSelectionChanged = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    alert(selectedData);

    const particularRows = selectedData.filter((row) =>
      [1, 2].includes(row.id)
    );
    if (particularRows.length > 0) {
      console.log("Selected Particular Rows:", particularRows);
    } else {
      console.log("Particular Rows not selected");
    }
  };

  return (
    <>
      {/* <table class="table  table-hover">
        <thead class="table-primary">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Sub Lettee Name</th>
            <th scope="col">Sub Lettee Contact No.</th>
            <th scope="col">Sub Lettee E-Mail</th>
            <th scope="col">Plot Area(sq.ft.)</th>
            <th scope="col">From Date</th>
            <th scope="col">To Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ajit Powar</td>
            <td>7047478701</td>
            <td>AjitPowar@gmail.com</td>
            <td>255010</td>
            <td>24 June 2024</td>
            <td>24 June 2024</td>
            <td>
              <Badge bg="success">Approved</Badge>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Amar Thakur</td>
            <td>AmarThakur@gmail.com</td>
            <td>2565565</td>
            <td>255010</td>
            <td>24 June 2024</td>
            <td>24 June 2024</td>
            <td>
              <Badge bg="warning" text="dark">
                Pending
              </Badge>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Anurag Jain</td>
            <td>Ani@gmail.com</td>
            <td>3</td>
            <td>255010</td>
            <td>24 June 2024</td>
            <td>24 June 2024</td>
            <td>
              <Badge bg="danger">Rejected</Badge>
            </td>
          </tr>
        </tbody>
      </table> */}
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col>
            {datatable && Object.keys(datatable).length ? (
              <AGGrids
                rowSelection={"multiple"}
                columnDefs={columnDefs}
                rowData={rowData}
                paginationPageSize={"10"}
                onGridReady={onGridReady}
                defaultColDef={defaultColDef}
                onselectionchange={onSelectionChanged}
              />
            ) : (
              <NoData path="plotregistration" showButton={false} h3Text="No data available here" />

            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
