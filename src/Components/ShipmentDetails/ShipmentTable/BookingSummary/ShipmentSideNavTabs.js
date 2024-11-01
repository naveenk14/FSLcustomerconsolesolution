// import React from "react";
// import { Tabs } from "antd";

// const ShipmentTabs = ({
//   activeTab,
//   onTabChange,
//   importCount,
//   transshipmentCount,
// }) => (
//   <Tabs
//     activeKey={activeTab}
//     onChange={onTabChange}
//     centered
//     tabBarStyle={{ marginBottom: "16px" }}
//   >
//     <Tabs.TabPane tab={`Import (${importCount})`} key="Import" />
//     <Tabs.TabPane
//       tab={`Transshipment (${transshipmentCount})`}
//       key="Transshipment"
//     />
//   </Tabs>
// );

// export default ShipmentTabs;

import React from "react";
import { Tabs } from "antd";

const ShipmentTabs = ({
  activeTab,
  onTabChange,
  importCount,
  transshipmentCount,
}) => {
  return (
    <Tabs
      activeKey={activeTab}
      onChange={onTabChange}
      centered
      tabBarStyle={{ marginBottom: "16px" }}
    >
      <Tabs.TabPane tab={`Import (${importCount})`} key="Import" />
      <Tabs.TabPane
        tab={`Transshipment (${transshipmentCount})`}
        key="Transshipment"
      />
    </Tabs>
  );
};

export default ShipmentTabs;
