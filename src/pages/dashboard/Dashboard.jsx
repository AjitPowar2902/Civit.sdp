import React, { useCallback, useState, useMemo } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import NavMenu from "../../components/NavMenu";
import Cards from "../../components/Cards";
import data from "../../data/data.json";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import Breadcrumbs from "../../components/Breadcrumbs";
import Badges from "../../components/Badges";
import { useNavigate } from "react-router-dom";
import AGGrids from "../../components/AGGrids";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import NoData from "../error-pages/NoData";
import {useSelector} from 'react-redux'


export default function Dashboard() {
  const role = useSelector((state) => state.user.role);
  const { actionsData, otherData } = data;
  const navigate = useNavigate();

  const clksubmit = () => {
    navigate("/plotregistration");
  };

  const { Datatable,blankdata } = data;
  const [rowData, setRowData] = useState([]);
    
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "SNo",
      minWidth: 170,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      floatingFilter: true,
    },
    {
      field: "Service_Name",
      headerName: "Service Name",
      floatingFilter: true,
    },
    {
      field: "Created_by",
      headerName: "Created by",
      // floatingFilter: true
      filter: "agDateColumnFilter",
      floatingFilter: true,
    },
    {
      field: "Created_on",
      headerName: "Created on",
      //  floatingFilter: true
      filter: "agDateColumnFilter",
      floatingFilter: true,
    },
    {
      field: "Pending_actions",
      headerName: "Pending actions",
      // floatingFilter: true,
      filter: "agNumberColumnFilter",
    },
    {
      field: "status",
      headerName: "Status",
      floatingFilter: true,
      cellRenderer: (params) => {
        let text;
        let bgColor;

        if (params.value === "InProcess") {
          bgColor = "primary";
        } else if (params.value === "Objection") {
          bgColor = "secondary";
        } else if (params.value === "Approved") {
          bgColor = "success";
        } else if (params.value === "Rejected") {
          bgColor = "danger";
        } else if (params.value === "Withdrawn") {
          bgColor = "warning";
          text = "dark";
        } else {
          bgColor = "primary";
        }
        return (
          <Badges label={params.value} background={bgColor} textcolor={text} />
        );
      },
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      Width: "auto",
      editable: true,
      filter: true,
      floatingFilter: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    setRowData(Datatable);
   //setRowData(blankdata);
  });

  const onSelectionChanged = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
   // alert(selectedData);
    //console.log("Selected Nodes:", selectedData);
    // Example of handling multiple selected rows
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
     
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Breadcrumbs />
          {actionsData.map((actionsData, index) =>
            actionsData.header === 0 ? (
              <Cards
                key={index}
                header={
                  <>
                  <Row>
                    <Col>
                    <div className="text-start pt-2" style={{fontSize:"13px"}}>No Data Available</div>
                    </Col>
                    <Col>
                    <div className="text-end">
                      <img
                        src="/images/open-folder.png"
                        style={{ width: "65%" }}
                      />
                    </div>
                    </Col>
                  </Row>
                
                    
                  </>
                }
                subtitle={"No Action Available"}
              />
            ) : (
              <Cards
                key={index}
                header={actionsData.header}
                subtitle={actionsData.subtitle}
              />
            )
          )}
        </Row>
        <Row className="mt-3"></Row>
        <Row className="mt-3">
          <Col lg="3" sm="12" className="mt-3">
            <label className="fw-bold">My Plots</label>
          </Col>
          <Col lg="3" sm="12" className="mt-3">
            <Form.Control type="text" placeholder="Serch for plot" />
          </Col>
          <Col lg="3" sm="12" className="mt-3">
            <Form.Select aria-label="Filter by IA">
              <option>Filter by IA</option>
              <option value="1">Pune</option>
              <option value="2">Pimpri</option>
              <option value="3">Mumbai</option>
            </Form.Select>
          </Col>
          <Col lg="3" sm="12" className="mt-3" style={{ textAlign: "right" }}>
            <SecondaryButton
              label={"Register a plot"}
              onClick={clksubmit}
            ></SecondaryButton>{" "}
            &nbsp;
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            {Object.keys(Datatable).length ?  (
               <AGGrids
               rowSelection={"multiple"}
               columnDefs={columnDefs}
               rowData={rowData}
               onGridReady={onGridReady}
               defaultColDef={defaultColDef}
               onselectionchange={onSelectionChanged}
             />
            
           
            ) : (
              <div><NoData path={"plotregistration"}/></div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
