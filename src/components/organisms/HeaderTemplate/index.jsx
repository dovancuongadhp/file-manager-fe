import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";

function HeaderTemplate({onCollapsed, isCollapse, colorBgContainer}) {
  
  return (
    <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => onCollapsed()}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  );
}

export default HeaderTemplate;
