import {
  PieChartOutlined,
  GroupOutlined,
  BulbOutlined,
  UserOutlined,
  TeamOutlined,
  IdcardOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import logo from "../../data/logo.png";
import "../../style/admin.css";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Approve Patients ", "2", <GroupOutlined />),
  getItem("View Patients ", "3", <BulbOutlined />),
  getItem("Create Doctor ", "4", <UserOutlined />),
  getItem("View Doctor ", "5", <TeamOutlined />),
  getItem("Support", "6", <IdcardOutlined />),
  getItem("Settings", "7", <SettingOutlined />),
];
const Slider = () => {
  return (
    <Sider style={{ backgroundColor: "#363740" }}>
      <div className="slider-logo">
        <img
          src={logo}
          alt="hyagvyvvygv"
          style={{ width: "14%", marginRight: "5px" }}
        />
        <p style={{ color: "white" }}>Keko Admin</p>
      </div>
      <Menu
        // theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        style={{
          backgroundColor: "#363740",
          height: "100vh",
          color: "white",
          marginTop: "50px",
        }}
      />
    </Sider>
  );
};

export default Slider;
