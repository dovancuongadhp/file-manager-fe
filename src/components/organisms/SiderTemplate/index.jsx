import { NavLink } from "react-router-dom";
import navigationMenu from "../../../routes/navigationMenu";
import { Layout, Menu } from "antd";
import { FileFilled } from "@ant-design/icons";
function SiderTemplate({ isCollapse }) {
  const currentPath = window.location.pathname;

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  function getMenus(menus) {
    const data = menus.map((item) => {
      return getItem(
        item.children ? item.label : <NavLink to={item?.path}>{item.label}</NavLink>,
        item?.path,
        item.icon ? <item.icon /> : null,
        item?.children
          ? item.children.map((data) =>
              getItem(
                <NavLink to={data?.path}>{data.label}</NavLink>,
                data?.path
              )
            )
          : undefined
      );
    });
    return data;
  }

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={isCollapse}
      theme="dark"
    >
      <div className="demo-logo-vertical">
        {isCollapse ? <FileFilled /> : <h3>File Manager</h3>}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentPath]}
        items={getMenus(navigationMenu)}
      />
    </Layout.Sider>
  );
}

export default SiderTemplate;
