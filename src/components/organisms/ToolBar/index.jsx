import { Card, Col, message, Row, Upload } from "antd";
import {
  EditOutlined,
  FolderOutlined,
  InboxOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
function ToolBar() {
  function handleClick() {
    console.log("action");
  }
  return (
    <div>
      <Row gutter={[20,20]}>
        <Col span={6}>
          <Card
            bordered={true}
            hoverable={styled.create}
            onClick={handleClick}
            style={styled.create}
          >
            <PlusOutlined style={styled.icon} />
            <h3>Create</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            bordered={true}
            hoverable={true}
            onClick={handleClick}
            style={styled.newFolder}
          >
            <FolderOutlined style={styled.icon} />
            <h3>New Folder</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            bordered={true}
            hoverable={true}
            onClick={handleClick}
            style={styled.upload}
          >
            <UploadOutlined style={styled.icon} />
            <h3>Upload</h3>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            bordered={true}
            hoverable={true}
            onClick={handleClick}
            style={styled.edit}
          >
            <EditOutlined style={styled.icon} />
            <h3>Edit</h3>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Upload.Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Upload.Dragger>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ToolBar;
const styled = {
  icon: {
    fontSize: "20px",
    padding: "10px 0px",
  },
  create: {
    color: "#1677ff",
  },
  newFolder: {
    color: "#f5222d",
  },
  upload: {
    color: "#52c41a",
  },
  edit: {
    color: "#faad14",
  },
};
