import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import SiderTemplate from "@components/organisms/SiderTemplate";
import HeaderTemplate from "@components/organisms/HeaderTemplate";
import { useEffect, useState } from "react";

function DefaultTemplate() {
  const [collapsed, setCollapsed] = useState(
    localStorage.getItem("collapsed") === "true" ? true : false
  );
  const { token: { colorBgContainer }} = theme.useToken();

  function handleCollapsed() {
    setCollapsed(!collapsed);
  }
  useEffect(() => {
    localStorage.setItem("collapsed", collapsed);
  }, [collapsed]);

  return (
    <div id="default_template">
      <Layout style={{ minHeigh: "100vh"}} hasSider>
        <SiderTemplate isCollapse={collapsed} />
        <Layout>
          <HeaderTemplate 
            isCollapse={collapsed}
            onCollapsed={handleCollapsed}
            colorBgContainer={colorBgContainer}
            />
          <div className="default_template_content">
            <Layout.Content
              style={{
                // margin: "24px 16px",
                padding: 24,
                // minHeight: 280,
                // background: colorBgContainer,
                // borderRadius: borderRadiusLG,
              }}
            >
              <Outlet />
            </Layout.Content>
          </div>
        </Layout>
      </Layout>
    </div>
  );
}

export default DefaultTemplate;
