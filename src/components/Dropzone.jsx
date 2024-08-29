import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  ListGroup,
  Image,
  Button,
} from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import SecondaryButton from "./buttons/SecondaryButton";

const Dropzone = ({
  setFieldValue,
  name,
  files,
  setFiles,
  plotData,
  setPlotData,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState(files || []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf,",
    onDrop: (newFiles) => {
      const allFiles = [...uploadedFiles, ...newFiles];
      setUploadedFiles(allFiles);
      setFiles(allFiles);
      setFieldValue(name, allFiles);
      setPlotData((prevData) => ({ ...prevData, files: allFiles }));
    },
    multiple: true,
  });

  useEffect(() => {
    setUploadedFiles(files || []);
  }, [files]);

  const createFilePreview = (file) => {
    return URL.createObjectURL(file);
  };

  const filesList = uploadedFiles.map((file) => {
    const filePreview = createFilePreview(file);

    const openInNewTab = () => {
      window.open(filePreview, "_blank");
    };

    if (file.type.startsWith("image/")) {
      return (
        <ListGroup.Item key={file.name}>
          <Image
            src={filePreview}
            rounded
            style={{ width: "100px", height: "auto" }}
          />
          <div>
            {file.name} - {file.size} bytes
          </div>
          <Button variant="link" onClick={openInNewTab}>
            Preview
          </Button>
        </ListGroup.Item>
      );
    } else if (file.type === "application/pdf") {
      return (
        <ListGroup.Item key={file.name}>
          <iframe
            src={filePreview}
            style={{ width: "100px", height: "150px" }}
            title={file.name}
          />
          <div>
            {file.name} - {file.size} bytes
          </div>
          <Button variant="link" onClick={openInNewTab}>
            Preview
          </Button>
        </ListGroup.Item>
      );
    } else {
      return (
        <ListGroup.Item key={file.name}>
          <div>
            {file.name} - {file.size} bytes
          </div>
          <Button variant="link" onClick={openInNewTab}>
            Preview
          </Button>
        </ListGroup.Item>
      );
    }
  });

  return (
    <Container className="my-4">
      <Row className="flex-column">
        <Col className="text-center border-dashed">
          <div
            {...getRootProps({
              className: "dropzone p-4",
            })}
            style={{
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            <Row className="align-items-center">
              <Col
                xs={12}
                md={8}
                className="d-flex flex-column align-items-center"
              >
                <img
                  src="/images/DropZone.png"
                  alt="dropzone"
                  style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                />
                <Row className="mt-3 w-100">
                  <Col xs={12} className="d-flex justify-content-center gap-2">
                    <SecondaryButton label="Select Files" />
                    <span className="d-none d-sm-inline">or</span>
                    <SecondaryButton label="Link from Entity Locker" />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4} className="d-flex justify-content-center">
                <Row
                  className="border-dashed p-3 text-start"
                  style={{ maxWidth: "100%", height: "auto" }}
                >
                  <h4>Note:</h4>
                  <ol>
                    <li>
                      Upload Letter of Authority for Property Registration on
                      company's letterhead
                    </li>
                    <li>
                      Please do not use any of these &, *% . @ : \ / ( ) special
                      characters in the letter of authority
                    </li>
                  </ol>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <ListGroup className="flex-row">{filesList}</ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Dropzone;
