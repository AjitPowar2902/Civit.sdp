import React, { useCallback, useState, useMemo, useEffect } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Cards";
import data from "../../data/data.json";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import AGGrids from "../../components/AGGrids";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import NoData from "../error-pages/NoData";
import { useSelector } from "react-redux";
import dashboardServices from "../../services/dashboard-services";
import { calculateSum } from "../../utils/calculate-sum";
import CustomAccordion from "../../components/CustomAccordion";
import { serviceConfig } from "../../config/service-config.js";
//import { FaBuilding } from "react-icons/fa";
import LandDeapartment from "../services/components/raise-service-request/LandDeapartment.jsx";
import WaterDepartment from "../services/components/raise-service-request/WaterDepartment.jsx";
import FireDepartment from "../services/components/raise-service-request/FireDepartment.jsx";

export default function Dashboard() {
  const role = useSelector((state) => state.user.role);
  const [datatable, setDatatable] = useState([]);
  const [sums, setSums] = useState({});
  const navigate = useNavigate();
  const UserId = useSelector((state) => state.user.UserId);

  const clksubmit = () => {
    navigate("/plotregistration");
  };

  useEffect(() => {
    const fetchGridData = async () => {
      try {
        const response = await dashboardServices.getGridData(UserId);
        setDatatable(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchGridData();
  }, []);

  useEffect(() => {
    if (datatable.length) {
      const columnNames = [
        "PendingApplications",
        "ApprovedApplications",
        "SuggestedApplications",
        "OnGoingApplications",
      ];
      const newSums = calculateSum(datatable, columnNames);
      // console.log("newsums", newSums);
      setSums(newSums);
    }
  }, [datatable]);
  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "PlotName",
      headerName: "Plot Name",
      floatingFilter: true,
    },
    {
      field: "OnGoingApplications",
      headerName: "OnGoing Applications",
      floatingFilter: true,
      //filter: "agDateColumnFilter",
    },
    {
      field: "PendingApplications",
      headerName: "Pending Applications",
      //filter: "agDateColumnFilter",
      floatingFilter: true,
    },
    {
      field: "SuggestedApplications",
      headerName: "Suggested Applications",
      // floatingFilter: true,
      filter: "agNumberColumnFilter",
    },
    {
      field: "ApprovedApplications",
      headerName: "Approved Applications",
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

  const onGridReady = useCallback((params) => {
    setRowData(datatable);
  });

  const onSelectionChanged = (event) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);

    //alert(selectedData);

    // Extract the 'Name' property from the selected data
    const singleName =
      selectedData.length > 0
        ? selectedData[0].Service_Name
        : "No Name Selected";

    // Convert the single name to a query parameter
    const queryParam = encodeURIComponent(singleName);
    //navigate(`/plotservice?name=${queryParam}`);
    navigate("/plotservice", { state: { data: selectedData } });

    //console.log("Selected Nodes:", selectedData);
    // Example of handling multiple selected rows
    const particularRows = selectedData.filter((row) =>
      [1, 2].includes(row.id)
    );
    if (particularRows.length > 0) {
      console.log("Selected Particular Rows:", particularRows);
    } else {
      // console.log("Particular Rows not selected");
    }
  };

  const cardData = [
    { columnName: "PendingApplications", label: "Pending Applications" },
    { columnName: "ApprovedApplications", label: "Approved Applications" },
    { columnName: "SuggestedApplications", label: "Suggested Applications" },
    { columnName: "OnGoingApplications", label: "OnGoing Applications" },
  ];
  const itemsArray = [
    { title: "Land Department", content: LandDeapartment },
    { title: "Fire Department", content: FireDepartment },
    { title: "Water Department", content: WaterDepartment },
  ];

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Breadcrumbs />
          {cardData.length === 0 ? (
            <Cards
              header={
                <>
                  <Row>
                    <Col>
                      <div
                        className="text-start pt-2"
                        style={{ fontSize: "13px" }}
                      >
                        No Data Available
                      </div>
                    </Col>
                    <Col>
                      <div className="text-end">
                        <img
                          src="/images/open-folder.png"
                          alt="No Data"
                          style={{ width: "65%" }}
                        />
                      </div>
                    </Col>
                  </Row>
                </>
              }
              subtitle="No Action Available"
            />
          ) : (
            cardData.map(({ columnName, label }) => (
              <Cards
                key={columnName}
                header={sums[columnName] || 0}
                subtitle={label}
              />
            ))
          )}
        </Row>
        <Row className="mt-3"></Row>
        <Row className="mt-3">
          <Col lg="3" sm="12" className="mt-3">
            <label className="fw-bold">My Plots</label>
          </Col>
          <Col lg="3" sm="12" className="mt-3">
            <Form.Control type="text" placeholder="Search for plot" />
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
            <SecondaryButton label={"Register a plot"} onClick={clksubmit} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            {Object.keys(datatable).length ? (
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
              <NoData path={"plotregistration"} />
            )}
          </Col>
        </Row>
        <div>
          <CustomAccordion
            items={itemsArray}
            bgcolor="#0FF"
            className="my-custom-class"
            shouldRender={(item) => item.title !== "Water Department"}
          />
        </div>
      </Container>
    </>
  );
}
