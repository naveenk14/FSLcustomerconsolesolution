// import React from "react";
// import { Card, Row, Col, Tag } from "antd";
// import "./ShipmentSideNav.css";
// import ShipmentSidebarArrow from "../../../assets/ShipmentSibarArrow.svg";
// import CountryFlag from "../../Core-Components/CountryFlag";

// const shipmentData = [
//   {
//     id: "BIPAQA2407422L",
//     status: "Import",
//     from: "Singapore",
//     to: "Jebel Ali",
//     countryCode: "IN",
//     flagTo: "AE",
//   },
//   {
//     id: "S00092298",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Riyadh",
//     countryCode: "IN",
//     flagTo: "SA",
//   },
//   {
//     id: "BIPJEB2407415L",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Aqaba",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "SEJEA24080291-03",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Mombasa",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "BIPAQA2407422L",
//     status: "Import",
//     from: "Singapore",
//     to: "Jebel Ali",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "S00092298",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Riyadh",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "S00092298",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Riyadh",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
// ];

// const ShipmentCard = ({ id, status, from, to, countryCode, flagTo }) => (
//   <Card className="shipment__sidebarcard" style={{ marginBottom: 7 }}>
//     <Row align="middle" style={{ width: "100%", padding: "0px" }}>
//       <Col span={14} style={{ fontSize: "14px", fontWeight: "500" }}>
//         {id}
//       </Col>
//       <Col span={7} style={{ textAlign: "right" }}>
//         <Tag
//           className="shipmentsidebartag"
//           style={{ width: "109px", textAlign: "center" }}
//           color={status === "Import" ? "green" : "blue"}
//         >
//           {status}
//         </Tag>
//       </Col>
//     </Row>

//     <Row style={{ marginTop: "5px" }}>
//       <Col span={24} style={{ fontSize: "14px" }}>
//         <span style={{ marginRight: "30px" }}>
//           <CountryFlag countryCode={countryCode} /> {from}
//         </span>
//         <img src={ShipmentSidebarArrow} />
//         <span style={{ marginLeft: "30px" }}>
//           <CountryFlag countryCode={flagTo} /> {to}
//         </span>
//       </Col>
//     </Row>
//   </Card>
// );

// const ShipmentSidNav = () => (
//   <div
//     className="shipmentsidebar"
//     style={{
//       width: "100%",
//       maxWidth: "272px",
//       // height: "100px",
//       // margin: "10px 10px",
//       border: "1px solid #E7E8F2",
//       background: "#F3F5F7",
//     }}
//   >
//     {shipmentData.map((item) => (
//       <ShipmentCard key={item.id} {...item} />
//     ))}
//   </div>
// );

// export default ShipmentSidNav;

// import React, { useState } from "react";
// import { Card, Row, Col, Tag, Tabs } from "antd";
// import "./ShipmentSideNav.css";
// import ShipmentSidebarArrow from "../../../assets/ShipmentSibarArrow.svg";
// import CountryFlag from "../../Core-Components/CountryFlag";

// const shipmentData = [
//   {
//     id: "BIPAQA2407422L",
//     status: "Import",
//     from: "Singapore",
//     to: "Jebel Ali",
//     countryCode: "IN",
//     flagTo: "AE",
//   },
//   {
//     id: "S00092298",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Riyadh",
//     countryCode: "IN",
//     flagTo: "SA",
//   },
//   {
//     id: "BIPJEB2407415L",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Aqaba",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "SEJEA24080291-03",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Mombasa",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "BIPAQA2407422M", // Changed to a unique ID
//     status: "Import",
//     from: "Singapore",
//     to: "Jebel Ali",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
// ];

// const ShipmentCard = ({ id, status, from, to, countryCode, flagTo }) => (
//   <Card className="shipment__sidebarcard" style={{ marginBottom: 7 }}>
//     <Row align="middle" style={{ width: "100%", padding: "0px" }}>
//       <Col span={14} style={{ fontSize: "14px", fontWeight: "500" }}>
//         {id}
//       </Col>
//       <Col span={7} style={{ textAlign: "right" }}>
//         <Tag
//           className="shipmentsidebartag"
//           style={{ width: "109px", textAlign: "center" }}
//           color={status === "Import" ? "green" : "blue"}
//         >
//           {status}
//         </Tag>
//       </Col>
//     </Row>
//     <Row style={{ marginTop: "5px" }}>
//       <Col span={24} style={{ fontSize: "14px" }}>
//         <span style={{ marginRight: "30px" }}>
//           <CountryFlag countryCode={countryCode} /> {from}
//         </span>
//         <img src={ShipmentSidebarArrow} alt="Arrow" />
//         <span style={{ marginLeft: "30px" }}>
//           <CountryFlag countryCode={flagTo} /> {to}
//         </span>
//       </Col>
//     </Row>
//   </Card>
// );

// const ShipmentSidNav = () => {
//   const [activeTab, setActiveTab] = useState("Import");

//   // Filter data based on the selected tab
//   const getFilteredData = (status) =>
//     shipmentData.filter((item) => item.status === status);

//   // Counts for the tabs
//   const importCount = getFilteredData("Import").length;
//   const transshipmentCount = getFilteredData("Transshipment").length;

//   return (
//     <div>
//       <Tabs
//         className="d-flex align-items-start"
//         activeKey={activeTab}
//         onChange={setActiveTab}
//         centered
//         tabBarStyle={{ marginBottom: "16px" }}
//       >
//         <Tabs.TabPane tab={`Import (${importCount})`} key="Import" />
//         <Tabs.TabPane
//           tab={`Transshipment (${transshipmentCount})`}
//           key="Transshipment"
//         />
//       </Tabs>
//       <div
//         className="shipmentsidebar"
//         style={{
//           width: "100%",
//           maxWidth: "272px",
//           border: "1px solid #E7E8F2",
//           background: "#F3F5F7",
//         }}
//       >
//         {getFilteredData(activeTab).map((item) => (
//           <ShipmentCard key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShipmentSidNav;

import React, { useState } from "react";
import { Card, Row, Col, Tag, Tabs } from "antd";
import "./ShipmentSideNav.css";
import ShipmentSidebarArrow from "../../../../assets/ShipmentSibarArrow.svg"
import CountryFlag from "../../../Core-Components/CountryFlag";

// Add exactly 10 data entries for both Import and Transshipment
const shipmentData = [
  // Import Shipments
  {
    id: "BIPAQA2407422L",
    status: "Import",
    from: "Singapore",
    to: "Jebel Ali",
    countryCode: "IN",
    flagTo: "AE",
  },
  {
    id: "BIPAQA2407423L",
    status: "Import",
    from: "Singapore",
    to: "Dubai",
    countryCode: "IN",
    flagTo: "AE",
  },
  {
    id: "BIPAQA2407424L",
    status: "Import",
    from: "Singapore",
    to: "Sharjah",
    countryCode: "IN",
    flagTo: "AE",
  },
  {
    id: "BIPAQA2407425L",
    status: "Import",
    from: "Singapore",
    to: "Abu Dhabi",
    countryCode: "IN",
    flagTo: "AE",
  },
  {
    id: "BIPAQA2407426L",
    status: "Import",
    from: "Singapore",
    to: "Doha",
    countryCode: "IN",
    flagTo: "QA",
  },
  {
    id: "BIPAQA2407427L",
    status: "Import",
    from: "Singapore",
    to: "Manama",
    countryCode: "IN",
    flagTo: "BH",
  },
  {
    id: "BIPAQA2407428L",
    status: "Import",
    from: "Singapore",
    to: "Kuwait City",
    countryCode: "IN",
    flagTo: "KW",
  },
  {
    id: "BIPAQA2407429L",
    status: "Import",
    from: "Singapore",
    to: "Muscat",
    countryCode: "IN",
    flagTo: "OM",
  },
  {
    id: "BIPAQA2407430L",
    status: "Import",
    from: "Singapore",
    to: "Salalah",
    countryCode: "IN",
    flagTo: "OM",
  },
  {
    id: "BIPAQA2407431L",
    status: "Import",
    from: "Singapore",
    to: "Jebel Ali",
    countryCode: "IN",
    flagTo: "AE",
  },

  // Transshipment Shipments
  {
    id: "S00092298",
    status: "Transshipment",
    from: "Singapore",
    to: "Riyadh",
    countryCode: "IN",
    flagTo: "SA",
  },
  {
    id: "S00092299",
    status: "Transshipment",
    from: "Singapore",
    to: "Aqaba",
    countryCode: "IN",
    flagTo: "JO",
  },
  {
    id: "S00092300",
    status: "Transshipment",
    from: "Singapore",
    to: "Dammam",
    countryCode: "IN",
    flagTo: "SA",
  },
  {
    id: "S00092301",
    status: "Transshipment",
    from: "Singapore",
    to: "Jeddah",
    countryCode: "IN",
    flagTo: "SA",
  },
  {
    id: "S00092302",
    status: "Transshipment",
    from: "Singapore",
    to: "Amman",
    countryCode: "IN",
    flagTo: "JO",
  },
  {
    id: "S00092303",
    status: "Transshipment",
    from: "Singapore",
    to: "Beirut",
    countryCode: "IN",
    flagTo: "LB",
  },
  {
    id: "S00092304",
    status: "Transshipment",
    from: "Singapore",
    to: "Mombasa",
    countryCode: "IN",
    flagTo: "KE",
  },
  {
    id: "S00092305",
    status: "Transshipment",
    from: "Singapore",
    to: "Djibouti",
    countryCode: "IN",
    flagTo: "DJ",
  },
  {
    id: "S00092306",
    status: "Transshipment",
    from: "Singapore",
    to: "Dar es Salaam",
    countryCode: "IN",
    flagTo: "TZ",
  },
  {
    id: "S00092307",
    status: "Transshipment",
    from: "Singapore",
    to: "Nairobi",
    countryCode: "IN",
    flagTo: "KE",
  },
];

const ShipmentCard = ({ id, status, from, to, countryCode, flagTo }) => (
  <Card className="shipment__sidebarcard p-0" style={{ marginBottom: 3 }}>
    <Row align="middle" style={{ width: "100%", padding: "0px" }}>
      <Col span={14} style={{ fontSize: "14px", fontWeight: "500" }}>
        {id}
      </Col>
      <Col span={7} style={{ textAlign: "right" }}>
        <Tag
          className="shipmentsidebartag"
          style={{ width: "109px", textAlign: "center" }}
          color={status === "Import" ? "green" : "blue"}
        >
          {status}
        </Tag>
      </Col>
    </Row>
    <Row style={{ marginTop: "5px" }}>
      <Col span={24} style={{ fontSize: "14px" }}>
        <span style={{ marginRight: "30px" }}>
          <CountryFlag countryCode={countryCode} /> {from}
        </span>
        <img src={ShipmentSidebarArrow} alt="Arrow" />
        <span style={{ marginLeft: "30px" }}>
          <CountryFlag countryCode={flagTo} /> {to}
        </span>
      </Col>
    </Row>
  </Card>
);

const ShipmentSidNav = () => {
  const [activeTab, setActiveTab] = useState("Import");

  // Filter data based on the selected tab
  const getFilteredData = (status) =>
    shipmentData.filter((item) => item.status === status);

  // Counts for the tabs
  const importCount = getFilteredData("Import").length;
  const transshipmentCount = getFilteredData("Transshipment").length;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "290px",
        // background: "#F8FAFC",
      }}
    >
      <Tabs
        className="d-flex align-items-start"
        activeKey={activeTab}
        onChange={setActiveTab}
        centered
        tabBarStyle={{ marginBottom: "9px" }}
      >
        <Tabs.TabPane tab={`Import (${importCount})`} key="Import" />
        <Tabs.TabPane
          tab={`Transshipment (${transshipmentCount})`}
          key="Transshipment"
        />
      </Tabs>
      <div
        className="shipmentsidebar"
        style={{
          width: "100%",
          maxWidth: "301px",
          border: "1px solid #E7E8F2",
          background: "#F3F5F7",
        }}
      >
        {getFilteredData(activeTab).map((item) => (
          <ShipmentCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ShipmentSidNav;

// import React, { useState } from "react";
// import { Card, Row, Col, Tag } from "antd"; // Removed Tabs from here
// import ShipmentTabs from "./ShipmentSideNavTabs"; // Import the new Tabs component
// import "./ShipmentSideNav.css";
// import ShipmentSidebarArrow from "../../../assets/ShipmentSibarArrow.svg";
// import CountryFlag from "../../Core-Components/CountryFlag";
// import ShipmentBase from "./ShipmentBase";

// const shipmentData = [
//   {
//     id: "BIPAQA2407422L",
//     status: "Import",
//     from: "Singapore",
//     to: "Jebel Ali",
//     countryCode: "IN",
//     flagTo: "AE",
//   },
//   {
//     id: "S00092298",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Riyadh",
//     countryCode: "IN",
//     flagTo: "SA",
//   },
//   {
//     id: "BIPJEB2407415L",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Aqaba",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "SEJEA24080291-03",
//     status: "Transshipment",
//     from: "Singapore",
//     to: "Mombasa",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
//   {
//     id: "BIPAQA2407422M", // Ensure unique IDs
//     status: "Import",
//     from: "Singapore",
//     to: "Jebel Ali",
//     countryCode: "IN",
//     flagTo: "SE",
//   },
// ];

// const ShipmentCard = ({ id, status, from, to, countryCode, flagTo }) => (
//   <Card className="shipment__sidebarcard" style={{ marginBottom: 7 }}>
//     <Row align="middle" style={{ width: "100%", padding: "0px" }}>
//       <Col span={14} style={{ fontSize: "14px", fontWeight: "500" }}>
//         {id}
//       </Col>
//       <Col span={7} style={{ textAlign: "right" }}>
//         <Tag
//           className="shipmentsidebartag"
//           style={{ width: "109px", textAlign: "center" }}
//           color={status === "Import" ? "green" : "blue"}
//         >
//           {status}
//         </Tag>
//       </Col>
//     </Row>
//     <Row style={{ marginTop: "5px" }}>
//       <Col span={24} style={{ fontSize: "14px" }}>
//         <span style={{ marginRight: "30px" }}>
//           <CountryFlag countryCode={countryCode} /> {from}
//         </span>
//         <img src={ShipmentSidebarArrow} alt="Arrow" />
//         <span style={{ marginLeft: "30px" }}>
//           <CountryFlag countryCode={flagTo} /> {to}
//         </span>
//       </Col>
//     </Row>
//   </Card>
// );

// const ShipmentSidNav = () => {
//   // const [activeTab, setActiveTab] = useState("Import");

//   // // Filter data based on the selected tab
//   // const getFilteredData = (status) =>
//   //   shipmentData.filter((item) => item.status === status);

//   // // Counts for the tabs
//   // const importCount = getFilteredData("Import").length;
//   // const transshipmentCount = getFilteredData("Transshipment").length;

//   return (
//     <div
//       className="shipmentsidebar"
//       style={{
//         width: "100%",
//         maxWidth: "272px",
//         border: "1px solid #E7E8F2",
//         background: "#F3F5F7",
//       }}
//     >
//       {/* {getFilteredData(activeTab).map((item) => (
//         <ShipmentCard key={item.id} {...item} />
//       ))} */}

//       {shipmentData.map((item) => (
//         <ShipmentCard key={item.id} {...item} />
//       ))}
//     </div>
//   );
// };

// export default ShipmentSidNav;

// import React from "react";
// import { Card, Row, Col, Tag } from "antd";
// import CountryFlag from "../../Core-Components/CountryFlag";
// import ShipmentSidebarArrow from "../../../assets/ShipmentSibarArrow.svg";

// const ShipmentCard = ({ id, status, from, to, countryCode, flagTo }) => (
//   <Card className="shipment__sidebarcard" style={{ marginBottom: 7 }}>
//     <Row align="middle" style={{ width: "100%", padding: "0px" }}>
//       <Col span={14} style={{ fontSize: "14px", fontWeight: "500" }}>
//         {id}
//       </Col>
//       <Col span={7} style={{ textAlign: "right" }}>
//         <Tag
//           className="shipmentsidebartag"
//           style={{ width: "109px", textAlign: "center" }}
//           color={status === "Import" ? "green" : "blue"}
//         >
//           {status}
//         </Tag>
//       </Col>
//     </Row>
//     <Row style={{ marginTop: "5px" }}>
//       <Col span={24} style={{ fontSize: "14px" }}>
//         <span style={{ marginRight: "30px" }}>
//           <CountryFlag countryCode={countryCode} /> {from}
//         </span>
//         <img src={ShipmentSidebarArrow} alt="Arrow" />
//         <span style={{ marginLeft: "30px" }}>
//           <CountryFlag countryCode={flagTo} /> {to}
//         </span>
//       </Col>
//     </Row>
//   </Card>
// );

// export default ShipmentCard;
