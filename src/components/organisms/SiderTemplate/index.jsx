import { NavLink } from "react-router-dom";
import routes from "../../../routes/routes";
import { Layout, Menu } from "antd";
import { FileFilled } from "@ant-design/icons";

function SiderTemplate({ isCollapse }) {
  const currentPath = window.location.pathname;
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={isCollapse}
      theme="light"
    >
      <div className="demo-logo-vertical">
        {isCollapse ? <FileFilled /> : <h3>File Manager</h3>}
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[currentPath]}
        items={routes?.map((item) => ({
          key: item.path,
          icon: <item.icon />,
          label: <NavLink to={item?.path}> {item.label}</NavLink>,
        }))}
      />
    </Layout.Sider>
  );
}

export default SiderTemplate;
