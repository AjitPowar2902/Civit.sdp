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

const Dropzone = ({ setFieldValue, name, files, setFiles }) => {
  const [uploadedFiles, setUploadedFiles] = useState(files || []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf,",
    onDrop: (newFiles) => {
      const allFiles = [...uploadedFiles, ...newFiles];
      setUploadedFiles(allFiles);
      setFiles(allFiles);
      setFieldValue(name, allFiles);
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
        <Col className="text-center">
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
            {/* <Alert variant="info">
              Drag 'n' drop some files here, or click to select files
            </Alert> */}
            <img
              src="/images/dropzone.png"
              style={{ width: "40%" }} alt="dropzone"
            ></img>
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
