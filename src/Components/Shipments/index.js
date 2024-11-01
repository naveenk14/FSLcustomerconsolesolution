import React, { useEffect } from "react";
import Map from "./Map/Map";
import BookingTabs from "./ShipmentTable/BookingTabs";
import "./ShipBookingTabs.css";
import UpcomingSailings from "../Dashboard/Upcoming/UpcomingSailings";
import uil_globe from "../../assets/NewGlobeG.svg";
import ph_table from "../../assets/NewListB.svg";
import globBlack from "../../assets/NewGlobeB.svg";
import listGray from "../../assets/NewListG.svg";
import { Tooltip } from "antd";
import { useLocation } from "react-router-dom";
import { profileRequest } from "../../Redux/Actions/ProfileAction";
import { useDispatch, useSelector } from "react-redux";
import BookingTabsForAgent from "./ShipmentTable/BookingTabsForAgent";

const ShipmentsHome = ({ showmap, setShowmap, showText, setShowText }) => {
  const { agent_exist } = useSelector((state) => state.AgentExist);
  const dispatch = useDispatch();
  const haddleShowMap = () => {
    setShowmap(true);
  };
  const haddleCloseMap = () => {
    setShowmap(false);
  };
  useEffect(() => {
    dispatch(profileRequest());
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(248, 250, 252)",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <div style={{ width: "1255px" }} className="shipmentIndex pb-4 mx-auto">
          {!showText ? (
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
          ) : (
            ""
          )}
          {showText ? "" : showmap && <Map />}
        </div>
      </div>

      {!showText ? (
        <div style={{ backgroundColor: "white", height: "175px" }}></div>
      ) : (
        <div style={{ backgroundColor: "white", height: "145px" }}></div>
      )}
      {!showText ? (
        <div
          style={{ width: "1255px", marginTop: "-177px" }}
          className="mb-4 mx-auto"
        >
          {agent_exist === "N" ? (
            <BookingTabs showText={showText} setShowText={setShowText} />
          ) : (
            <BookingTabsForAgent
              showText={showText}
              setShowText={setShowText}
            />
          )}
        </div>
      ) : (
        <div
          style={{ width: "1255px", marginTop: "-235px" }}
          className="mb-4 mx-auto"
        >
          {agent_exist === "N" ? (
            <BookingTabs
              showText={showText}
              setShowText={setShowText}
              setShowmap={setShowmap}
            />
          ) : (
            <BookingTabsForAgent
              showText={showText}
              setShowText={setShowText}
              setShowmap={setShowmap}
            />
          )}
        </div>
      )}
      {/* <div style={{ width: "1255px" }} className="shipmentIndex pb-4 mx-auto">
          {showText ? (
            ""
          ) : (
            <div style={{ height: "90v" }}>
              {" "}
              <UpcomingSailings
                setOriginPort={setOriginPort} 
                setDestPort={setDestPort}
              />
            </div>
          )}
        </div> */}
    </div>
  );
};

export default ShipmentsHome;
