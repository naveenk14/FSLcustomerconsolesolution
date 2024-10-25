import React from "react";
import Map from "./Map/Map";
import uil_globe from "../../assets/NewGlobeG.svg";
import ph_table from "../../assets/NewListB.svg";
import globBlack from "../../assets/NewGlobeB.svg";
import listGray from "../../assets/NewListG.svg";
import { Tooltip } from "antd";
import UpcomingSailings from "../Dashboard/Upcoming/UpcomingSailings";

const ShipmentSchedules = ({
  setOriginPort,
  setDestPort,
  showmap,
  setShowmap,
}) => {
    
  const haddleShowMap = () => {
    setShowmap(true);
  };
  const haddleCloseMap = () => {
    setShowmap(false);
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(248, 250, 252)",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <div style={{ width: "1255px" }} className="shipmentIndex mx-auto">
          <p className="m-0 py-5" style={{fontSize:"28px",fontWeight:"700"}}>Sailing Schedules</p>
          {/* {
            showmap ? (
              <div className="py-4 d-flex justify-content-end gap-1">
                <div style={{ cursor: "pointer" }}>
                  <Tooltip title="Dashboard View">
                    <img
                      src={listGray}
                      onClick={haddleCloseMap}
                      width="18px"
                      height="14px"
                    />
                  </Tooltip>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Tooltip title="Map View">
                    <img
                      src={globBlack}
                      onClick={haddleShowMap}
                      width="15px"
                      height="15px"
                    />
                  </Tooltip>
                </div>
              </div>
            ) : (
              <div className="py-4 d-flex justify-content-end gap-1">
                <div style={{ cursor: "pointer" }}>
                  <Tooltip title="Dashboard View">
                    <img src={ph_table} onClick={haddleCloseMap} />
                  </Tooltip>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Tooltip title="Map View">
                    <img src={uil_globe} onClick={haddleShowMap} />
                  </Tooltip>
                </div>
              </div>
            )
        }
          { showmap && <Map />} */}
        </div>
      </div>
      <div style={{ backgroundColor: "white", height: "65px" }}></div>
      <div style={{ width: "1255px",marginTop:"-120px",minHeight:"600px" }} className="shipmentIndex pb-4 mx-auto">
          <div style={{ height: "90v" }}>
            {" "}
            <UpcomingSailings
              setOriginPort={setOriginPort}
              setDestPort={setDestPort}
            />
          </div>
      </div>
    </div>
  );
};

export default ShipmentSchedules;
