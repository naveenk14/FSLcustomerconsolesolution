import React, { useEffect, useState } from "react";
import { Card, Row, Col, Tag, Tabs, Tooltip } from "antd";
import "./ShipmentSideNav.css";
import ShipmentSidebarArrow from "../../../../assets/ShipmentSibarArrow.svg";
import CountryFlag from "../../../Core-Components/CountryFlag";
import { Height } from "@mui/icons-material";

const ShipmentCard = ({
  item,
  setAgentData,
  index,
  selected,
  setSelected

}) => {



  return (
    <Card
      className="shipment__sidebarcard p-0"
      style={{ marginBottom: 3,background:index === selected ? "#CFF1FF" : "white" }}
      onClick={()=>{return setAgentData(item),setSelected(index)}}
    >
      <Row align="middle" style={{ width: "100%", padding: "0px" }}>
        <Col span={14} style={{ fontSize: "14px", fontWeight: "500",fontFamily: "Roboto" }}>
          {item?.booking_id}
        </Col>
        <Col span={7} style={{ textAlign: "right" }}>
          <Tag
            className="shipmentsidebartag"
            style={{ width: "109px", textAlign: "center",fontFamily: "Roboto" }}
            color={item?.trade === "IMPORT" ? "green" : "blue"}
          >
            {item?.trade}
          </Tag>
        </Col>
      </Row>
      <Row style={{ marginTop: "5px" }}>
        <Col span={24} style={{ fontSize: "14px" }}>
          <span style={{ marginRight: "25px" }}>
            <CountryFlag countryCode={item?.origin_countrycode} styleData={{marginRight:"8px",width:"unset",height:"11px",boxShadow: "1px 1px 3px 1px black"}}  />
            {item?.origin?.length <= 10 ? (
             item?.origin
            ) : (
              <Tooltip placement="topLeft" zIndex={9999} title={item?.origin}>
                <span role="button">{item?.origin.slice(0, 9)?.trim() + "..."}</span>
              </Tooltip>
            )}
          </span>
          <img src={ShipmentSidebarArrow} alt="Arrow" />
          <span style={{ marginLeft: "25px" }}>
            <CountryFlag countryCode={item?.destination_countrycode} styleData={{marginRight:"8px",width:"unset",height:"11px",boxShadow: "1px 1px 3px 1px black"}}  />
            {item?.destination?.length <= 10 ? (
              item?.destination
            ) : (
              <Tooltip placement="topLeft" zIndex={9999} title={item?.destination}>
                <span role="button">
                  {item?.destination.slice(0, 9)?.trim() + "..."}
                </span>
              </Tooltip>
            )}
          </span>
        </Col>
      </Row>
    </Card>
  );
};

const ShipmentSidNav = ({ rowData, agentContainerData, setAgentData }) => {
  const [activeTab, setActiveTab] = useState(
    rowData?.export_import === "Export" ? "EXPORT" : "IMPORT"
  );
  console.log(activeTab);
  const data = agentContainerData?.viewContainerData?.container;
  const count = agentContainerData?.viewContainerData?.statuswise_count;
  console.log(data);
  const [selected, setSelected] = useState(0)

  // Filter data based on the selected tab
  // const getFilteredData = (status) => {
  //   return data?.filter((item) => item.trade === status);
  // };

    // Filtered data based on active tab
    const filteredData = data?.filter((item) => item?.trade === activeTab);
    console.log(filteredData)

  // Counts for the tabs
  // const importCount = getFilteredData(
  //   rowData?.export_import === "Export" ? "EXPORT" : "IMPORT"
  // )?.length;
  // const defaultData = getFilteredData(
  //   rowData?.export_import === "Export" ? "EXPORT" : "IMPORT"
  // )?.[getFilteredData?.length-1];
  // const transshipmentCount = getFilteredData("TRANSIT")?.length;
  // console.log(importCount, transshipmentCount);

  // useEffect(() => {
  //   if (filteredData && filteredData.length > 0) {
  //     setAgentData(filteredData[0]);
  //   } else {
  //     setAgentData(null); // Clear if there's no item
  //   }
  // }, []);

  // Set the first item in the filtered data to agent data
  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      console.log("worked")
      setAgentData(filteredData[0]);
    } else {
      setAgentData(null); // Clear if there's no item
    }
    setSelected(0)
    
  }, [filteredData && activeTab]);


  return (
    <div
      className="tabshadow border shadow"
      style={{
        width: "100%",
        maxWidth: "290px",
        background: "#F8FAFC",
        borderRadius: "6px",
        minHeight:"400px"
      }}
    >
      <Tabs
        className="d-flex align-items-start"
        activeKey={activeTab}
        onChange={setActiveTab}
        centered
        tabBarStyle={{ marginBottom: "9px" }}
      >
        <Tabs.TabPane
          tab={`${rowData?.export_import} (${
            count?.[0]?.[
              rowData?.export_import === "Export" ? "EXPORT" : "IMPORT"
            ] || "0"
          })`}
          key={`${rowData?.export_import === "Export" ? "EXPORT" : "IMPORT"}`}
        />
        <Tabs.TabPane
          tab={`Transhipment (${count?.[0]?.["TRANSIT"] || "0"})`}
          key="TRANSIT"
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
        {filteredData?.map((item,index) => (
          <ShipmentCard
            key={index}
            item = {item}
            setAgentData={setAgentData}
            index={index}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default ShipmentSidNav;
