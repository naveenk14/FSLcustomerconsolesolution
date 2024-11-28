import React, { useEffect, useState } from "react";
import ShipmentHeader from "./ShipmentHeader";
import StepperColumn from "./Track/StepperColumn";
import { Breadcrumb, Button, Card, Dropdown } from "antd";
import "./ShipmentBase.css";
import PendingActionsBase from "./PendingActions/PendingActionsBase";
import ShipmentDocuments from "./Documents/ShipmentDocuments";
import QuoteDetails from "./QuoteDetails/QuoteDetails";
import VerticalTab from "./Track/TabBase";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShipmentTable from "./ShipmentTable";
import { RightOutlined } from "@ant-design/icons";
import TabBase from "./Track/TabBase";
import { hover } from "@testing-library/user-event/dist/hover";
import { IoMdChatboxes } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShipmentDetailsModal from "./Modal/ShipmentDetailsModal";
import { Box, Dialog, DialogContent, styled } from "@mui/material";
import { makeStyles } from "@emotion/styled";
import ShipmentSummary from "./BookingSummary/ShipmentSummary";
import ShipmentSummaryForAgent from "./BookingSummary/ShipmentSummaryForAgent";
import ShipmentMapModal from "./ShipmentMapModal";
import { VscClose } from "react-icons/vsc";
import { Widgets } from "@mui/icons-material";
import ShipmentSideNav from "./BookingSummary/ShipmentSideNav";
import "./BookingSummary/ShipmentSideNav.css";
import shipgif from "../../../assets/shipbg-gif.gif";
import { ViewContainerAction } from "../../../Redux/Actions/ViewContainerAction";

const Dialogs = styled(Dialog)({
  "& .MuiDialog-paper": {
    overflowY: "unset",
    maxWidth: "1800px",
    width: "1400px",
    height: "90vh",
  },
});

const ShipmentBase = ({ open, close, rowData, searchvalue }) => {
  console.log("rowData", rowData);
  const dispatch = useDispatch()
  // const rowDatas = rowData
  const bookingData = useSelector((state) => state.ViewBooking);
  console.log("bookingData", bookingData);
  //for View Booking Customer
  const ViewBooking = bookingData?.viewBookingData?.customercode;
  const OriginMilestones = bookingData?.viewBookingData?.milestone_origin;
  const TransitMilestones = bookingData?.viewBookingData?.milestone_transit;
  const DestinationMilestones =
    bookingData?.viewBookingData?.milestone_destination;
  console.log("OriginMilestones", OriginMilestones);


  //for View Container Agent
  const agentContainerData = useSelector((state) => state.ViewContainer);
  const { agent_exist } = useSelector((state) => state.AgentExist);
  const {loading} = useSelector((state) => state.ViewContainer);
  console.log(agent_exist);
  console.log(agentContainerData);
  const [agentData, setAgentData] = useState(
    agentContainerData?.viewContainerData?.container?.[0]
  );
  console.log(agentData);
  const container_id = rowData ? rowData?.container?.split("|")[1] : searchvalue
  console.log(container_id)
    
  function isObject(variable) {
    return variable !== null && typeof variable === 'object' && !Array.isArray(variable);
  }


  useEffect(() => {
    if(agent_exist === "Y" && isObject(rowData)){
      console.log("test")
      dispatch(ViewContainerAction({container_id}))
    }else if(agent_exist === "Y" && searchvalue ){
      dispatch(ViewContainerAction({container_id}))
    }
  }, [rowData])



  const tabListNoTitle = [
    // {
    //   key: 'PendingActions',
    //   label: 'Pending Actions',
    // },
    {
      key: "Milestones",
      label: "Milestones",
    },
    {
      key: "ShipmentSummary",
      label: "Shipment Summary",
    },
    // {
    //   key: 'QuoteDetails',
    //   label: 'Quote Details',
    // },
    {
      key: "Documents",
      label: "Documents",
    },
  ];

  const steps = [
    {
      step: "Booking Created",
      body: "Booking done on 11/05/2023 at 02:20 PM",
    },
    {
      step: "Cargo Picked up",
      body: "Cargo will be Picked up  on 13/05/2023.",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
    {
      step: "Cargo Picked up",
      body: "Cargo will be Picked up  on 13/05/2023.",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
  ];

  const contentListNoTitle = {
    // PendingActions: <PendingActionsBase />,
    // PendingActions: <TabBase />,
    ShipmentSummary:
      agent_exist === "N" ? (
        <ShipmentSummary />
      ) : agent_exist === "Y" ? (
        <ShipmentSummaryForAgent agentData={agentData} />
      ) : (
        ""
      ),
    QuoteDetails: <QuoteDetails />,
    Documents: <ShipmentDocuments agentData={agentData} />,
    Milestones: (
      <>
        {agent_exist === "Y" && agentData?.milestone_origin?.length > 0 && (
          <p
            style={{
              fontWeight: "600",
              fontSize: "15px",
              lineHeight: "17px",
              letterSpacing: ".01em",
              margin: "15px 0px",
            }}
          >
            Origin Milestones
          </p>
        )}
        {agent_exist === "N" &&
          OriginMilestones &&
          OriginMilestones?.length > 0 && (
            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "17px",
                letterSpacing: ".01em",
                margin: "15px 0px",
              }}
            >
              Origin Milestones
            </p>
          )}
        <StepperColumn
          step={
            agent_exist === "N"
              ? OriginMilestones
              : agentData && agentData?.milestone_origin
          }
        />
        {agent_exist === "Y" && agentData?.milestone_transit?.length > 0 && (
          <p
            style={{
              fontWeight: "600",
              fontSize: "15px",
              lineHeight: "17px",
              letterSpacing: ".01em",
              margin: "15px 0px",
            }}
          >
            Transit Milestones
          </p>
        )}
        {agent_exist === "N" &&
          TransitMilestones &&
          TransitMilestones?.length > 0 && (
            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "17px",
                letterSpacing: ".01em",
                margin: "15px 0px",
              }}
            >
              Transit Milestones
            </p>
          )}
        <StepperColumn
          step={
            agent_exist === "N"
              ? TransitMilestones
              : agentData && agentData?.milestone_transit
          }
        />
        {agent_exist === "Y" &&
          agentData?.milestone_destination?.length > 0 && (
            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "17px",
                letterSpacing: ".01em",
                margin: "15px 0px",
              }}
            >
              Destination Milestones
            </p>
          )}
        {agent_exist === "N" &&
          DestinationMilestones &&
          DestinationMilestones?.length > 0 && (
            <p
              style={{
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "17px",
                letterSpacing: ".01em",
                margin: "15px 0px",
              }}
            >
              Destination Milestones
            </p>
          )}
        <StepperColumn
          step={
            agent_exist === "N"
              ? DestinationMilestones
              : agentData && agentData?.milestone_destination
          }
        />
        {agent_exist === "N" &&
          !DestinationMilestones?.length > 0 &&
          !TransitMilestones?.length > 0 &&
          !OriginMilestones?.length > 0 && (
            <p className="py-5 mb-5 text-center">No records to Display</p>
          )}
        {agent_exist === "Y" &&
          !agentData?.milestone_transit?.length > 0 &&
          !agentData?.milestone_origin?.length > 0 &&
          !agentData?.milestone_destination?.length > 0 && (
            <p className="py-5 mb-5 text-center">No records to Display</p>
          )}
      </>
    ),
  };

  const items = [
    {
      key: "1",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<IoMdChatboxes size={20} />}
        >
          <span className="ms-2">Start Chat</span>
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<FaPhoneVolume size={5} />}
        >
          <span className="ms-2">Request Callback</span>
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<IoMail size={20} />}
        >
          <span className="ms-2">Email Us</span>
        </Button>
      ),
    },
  ];

  const [vesselmodalopen, setVesselmodalopen] = useState(false);

    
  // if (loading ){
  //   return (
  //     <Box
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "353px",
  //         // alignSelf:"center"
  //       }}
  //     >
  //       {/* <CircularProgress style={{ color: "red" }} /> */}
  //       <img src={shipgif} width="140px" height="140px" />
  //     </Box>
  //   );
  // }

  return (
    // <div className="shipment_details_section container-fluid p-0" style={{marginTop:"4.7rem",backgroundColor: "#F3F5F7"}} >
    //     <div className="black_box container-fluid"></div>
    //     <div className="shipment_container">
    //         <div className="row shipment_ID_row" style={{marginTop:"20px",marginBottom:"20px"}}>
    //             <div className="shipment_ID" style={{marginBottom:"4px"}}>
    //                 <p className='m-0 text-white'>Shipment ID :&nbsp;
    //                 {
    //                   ViewBooking?.map((item)=>{
    //                     return <span>{item.booking_id}</span>
    //                   }
    //                   )
    //                 }
    //                 </p>
    //             </div>
    //             <div className="breadCrumb d-flex justify-content-between align-items-center">
    //               <Breadcrumb
    //                   separator={<RightOutlined style={{ fontSize: '11px', color: '#ACB8C4' }} />}
    //                   items={[
    //                     {
    //                       title: <Link
    //                       style={{
    //                         color:"#ACB8C4",
    //                         fontWeight:"400",
    //                         fontSize:'14px',
    //                         letterSpacing:'.01em',
    //                         textDecoration:"none"
    //                       }}
    //                       to='/'>Home</Link>,
    //                     },
    //                     {
    //                       title: 'Shipments',
    //                     },
    //                     {
    //                       title: 'Shipments Details',
    //                     }
    //                   ]}
    //                   className='text-white'
    //               />
    //               <Dropdown
    //                   menu={{
    //                     items,
    //                   }}
    //                   placement="bottomRight"
    //                   arrow
    //                 >
    //                   <p className="m-0">Need Help?</p>
    //               </Dropdown>

    //             </div>
    //         </div>
    //         <div className="row shipment_header">
    //               <ShipmentHeader />
    //               <ShipmentTable contentListNoTitle={contentListNoTitle} tabListNoTitle={tabListNoTitle}  />
    //         </div>
    //     </div>
    //     {/* <ShipmentDetailsModal open={true} /> */}
    // </div>
    <>
      {/* <VscClose size={22} color='red' role='button' onClick={()=>close(false)} style={{position:"absolute",top:"0px",right:"-22px"}} /> */}
      <Dialogs
        open={open}
        onClose={() => {
          return close(false), setAgentData(null);
        }}
        aria-labelledby="responsive-dialog-title"
        id="edit_profile_modal_section"
        maxWidth={"xl"}
      >
        <DialogContent>
          <VscClose
            size={22}
            color="black"
            role="button"
            onClick={() => {
              return close(false), setAgentData(null);
            }}
            style={{ position: "absolute", top: "0px", right: "10px" }}
          />
          {agent_exist === "N" && (
            <ShipmentHeader rowDatas={rowData} close={close} />
          )}

          {agent_exist === "Y" && !loading ? (
            <>
              {/* {!loading ? ( */}
                <div className="d-flex gap-3">
                  <ShipmentSideNav
                    rowData={rowData}
                    agentContainerData={agentContainerData}
                    setAgentData={setAgentData}
                  />
                  <ShipmentTable
                    contentListNoTitle={contentListNoTitle}
                    tabListNoTitle={tabListNoTitle}
                    setVesselmodalopen={setVesselmodalopen}
                    close={close}
                    rowDatas={rowData}
                  />
                </div>
            
            </>
          ):agent_exist === "Y" && loading ?<Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  // alignSelf:"center"
                }}
              >
                {/* <CircularProgress style={{ color: "red" }} /> */}
                <img src={shipgif} width="140px" height="140px" />
              </Box>
          :""}
          {agent_exist === "N" && (
            <ShipmentTable
              contentListNoTitle={contentListNoTitle}
              tabListNoTitle={tabListNoTitle}
              setVesselmodalopen={setVesselmodalopen}
              close={close}
              rowDatas={rowData}
            />
          )}

          {/* <ShipmentTable contentListNoTitle={contentListNoTitle} tabListNoTitle={tabListNoTitle} setVesselmodalopen={setVesselmodalopen} close={close} rowDatas={rowData}  /> */}
          {/* <VscClose size={22} color='black' role='button' onClick={()=>close(false)} style={{position:"absolute",top:"0px",right:"-22px"}} /> */}
        </DialogContent>
      </Dialogs>

      <Dialog
        open={vesselmodalopen}
        onClose={() => setVesselmodalopen(false)}
        aria-labelledby="responsive-dialog-title"
        id="vessel_modal_section"
        maxWidth={"lg"}
        fullWidth={true}
      >
        <DialogContent>
          <ShipmentMapModal />
          <VscClose
            size={22}
            color="#ffff"
            role="button"
            onClick={() => setVesselmodalopen(false)}
            style={{ position: "absolute", top: "0px", right: "-22px" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShipmentBase;
