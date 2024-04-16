import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import SiderTemplate from "../../organisms/SiderTemplate";
import HeaderTemplate from "../../organisms/HeaderTemplate";
import { useEffect, useState } from "react";
const { Content } = Layout;
function DefaultTemplate() {
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("collapsed") === "true" ? true : false
  );
  const { token: { colorBgContainer, borderRadiusLG }} = theme.useToken();

  function handleCollapsed() {
    setCollapsed(!collapsed);
  }
  useEffect(() => {
    localStorage.setItem("collapsed", collapsed);
  }, [collapsed]);

  return (
    <div id="default_template">
      <Layout style={{ height: "100vh"}} hasSider>
        <SiderTemplate isCollapse={collapsed} />
        <Layout>
          <HeaderTemplate 
            isCollapse={collapsed}
            onCollapsed={handleCollapsed}
            colorBgContainer={colorBgContainer}
            />
          <div className="default_template_content">
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Content>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}

export default DefaultTemplate;
