import React, { useEffect, useRef, useState } from "react";
import "./ShipmentSummaryForAgent.css";
import { Tooltip } from "antd";
import Modal from "../Modal/Modal";
import ContainerDetailsModal from "../Modal/ContainerDetailsModal";
import TextArea from "antd/es/input/TextArea";
import { useSelector } from "react-redux";
import { Dialog, DialogContent } from "@mui/material";

const ShipmentSummaryForAgent = () => {
  const bookingData = useSelector((state) => state?.ViewBooking);
  const ViewBooking = bookingData?.viewBookingData?.customercode;

  const conatinerno =
    bookingData?.viewBookingData?.customercode[0]?.container_no;
  const conatiner_array = conatinerno?.split(",");

  const requirementDescription =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsum commodi inventore nam explicabo voluptatibus optio non voluptatem dolore soluta nisi voluptatum mollitia quam minus consectetur quisquam omnis, possimus asperiores harum aperiam aliquid voluptates doloribus? Odit accusamus quia reiciendis doloribus, quibusdam dolor mollitia, nam totam provident maiores ad deleniti. Officiis est voluptate dolore numquam pariatur unde placeat, facere a rerum! Illo praesentium asperiores architecto dolorem, accusamus eligendi quibusdam consequuntur tempora autem culpa temporibus! Facilis, ipsa dolorum. Cupiditate sit dolores optio magnam amet nemo obcaecati, eum repellat. Expedita quas dicta repellendus. Inventore mollitia totam laboriosam autem ipsam debitis animi, perspiciatis cum minima similique, sunt doloribus alias maxime magni nesciunt beatae quia iure earum nihil ut ea voluptatum, ratione ipsa. Veritatis dolores facere accusamus! Veritatis pariatur explicabo excepturi magni perspiciatis quidem inventore nostrum cupiditate ratione optio tenetur, iste ullam eos eligendi mollitia consequuntur sapiente ducimus vel suscipit, deleniti quaerat dolor dignissimos harum porro. Doloremque esse veritatis quod, sit similique porro harum voluptatem at, cum, eligendi ipsam nam! Alias saepe voluptatum beatae, tempore dolore dolorum quaerat excepturi harum qui, commodi vero voluptate totam possimus unde fuga quod vel veniam sapiente eligendi, odio assumenda illum. Blanditiis, quam! Suscipit, nisi consectetur. Laudantium, quaerat. Accusantium, ullam.";

  const totalWeight = "500000000010 KG";
  const totalVolume = "1023.45698 CBM";
  const totalValue = "$ 100000000000";
  const packageType = "$ 100000000000";
  const NoofUnits = "$ 100000000000";
  const CargoType = "General Cargo";
  const Commodityname = "-";
  const Hscode = "-";
  const NoofContainers = "$ 100000000000";
  const PartiesShipper =
    "ABC Enterprices the value of aim at create an automatedgi";
  const PartiesConsignee =
    "ABC Enterprices the value of aim at create an automatedgi";
  const PartiesNotify =
    "ABC Enterprices the value of aim at create an automatedgi";
  const PartiesBilling =
    "ABC Enterprices the value of aim at create an automatedgi";
  const containerLists = [
    {
      key: 1,
      container: "TRHU3324147 / 20 GP",
    },
    {
      key: 2,
      container: "TRHU3324147 / 21 GP",
    },
    {
      key: 3,
      container: "TRHU3324147 / 22 GP",
    },
    {
      key: 4,
      container: "TRHU3324147 / 23 GP",
    },
    {
      key: 5,
      container: "TRHU3324147 / 24 GP",
    },
    {
      key: 6,
      container: "TRHU3324147 / 26 GP",
    },
    {
      key: 7,
      container: "TRHU3324147 / 27 GP",
    },
    {
      key: 8,
      container: "TRHU3324147 / 28 GP",
    },
    {
      key: 9,
      container: "TRHU3324147 / 29 GP",
    },
    {
      key: 10,
      container: "TRHU3324147 / 30 GP",
    },
    {
      key: 11,
      container: "TRHU3324147 / 31 GP",
    },
    {
      key: 12,
      container: "TRHU3324147 / 32 GP",
    },
    {
      key: 13,
      container: "TRHU3324147 / 33 GP",
    },
  ];

  // const getOptions = (array, key) => {
  //   if (!Array.isArray(array) || !array?.length) {
  //     return [];
  //   }
  //   return Array.from(new Set(array.map((data) => data[key]))).map((value,index) => ({
  //     key: index+1,
  //     value,
  //   }));
  // };

  // console.log(getOptions(conatiner_array,"conatiner"))
  const newContainerArray = conatiner_array?.map((value, index) => {
    return { key: index + 1, container: value };
  });

  console.log(newContainerArray);

  const MinContainer = newContainerArray?.filter((item) => item.key <= 1);
  console.log(MinContainer);
  const MoreContainer = newContainerArray?.filter((item) => item.key >= 1);
  console.log(MoreContainer);

  //container_details_modal
  const [openContmodal, setOpenContmodal] = useState(false);
  const handleContOpen = () => {
    setOpenContmodal(true);
  };
  const handleContClose = () => {
    setOpenContmodal(false);
  };

  //This is for decrease count logic of text area
  const [textCount, setTextCount] = useState(1000);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    const length = Math.abs(textInput.length - 1000);
    setTextCount(length);
  }, [textInput]);

  const modalref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!modalref?.current?.contains(e.target)) {
        console.log("success");
        handleContClose();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="container-fluid booking_summary">
      {/* {ViewBooking?.map((item) => { */}
      {/* return ( */}
      <div className="row mx-0">
        {/* <div className="col-6 mb-3">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Cargo Details</p>
            </div>
            <div className="card-body">
              <div className="row  mx-0">
                <div className="col">
                  <p className="row_head">Total Weight</p>

                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.total_weight?.length <= 12 ? (
                          item?.total_weight
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={totalWeight}
                          >
                            <span role="button">
                              {item?.total_weight
                                .slice(0, 13)
                                .trim()
                                .split("")
                                .join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">
                  <p className="row_head">Total Volume</p>

                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.total_volume?.length <= 12 ? (
                          item?.total_volume
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            style={{ zIndex: "9999" }}
                            title={item?.total_volume}
                          >
                            <span role="button">
                              {item?.total_volume
                                .slice(0, 13)
                                .trim()
                                .split("")
                                .join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
                <div className="col">
                  <p className="row_head">Package Type</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.package_type?.length <= 12 ? (
                          item?.package_type
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={item?.package_type}
                          >
                            <span role="button">
                              {item?.package_type
                                ?.slice(0, 13)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="row  mx-0">
                <div className="col">
                  <p className="row_head">No of Units</p>
                  {ViewBooking?.map((item) => {
                    return (
                      <p className="row_head2">
                        {item?.no_of_units?.length <= 12 ? (
                          item?.no_of_units
                        ) : (
                          <Tooltip
                            placement="topLeft"
                            zIndex={9999}
                            title={item?.no_of_units}
                          >
                            <span role="button">
                              {item?.no_of_units
                                ?.slice(0, 13)
                                ?.trim()
                                ?.split("")
                                ?.join("") + "..."}
                            </span>
                          </Tooltip>
                        )}
                      </p>
                    );
                  })}
                </div>
               
              </div>
            </div>
          </div>
        </div> */}

        <div className="col-7 mb-3">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Shipment Details</p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="row_head mb-2">No of Units</p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      1
                      {item?.no_of_units?.length <= 12 ? (
                        item?.no_of_units
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.no_of_units}
                        >
                          <span role="button">
                            {item?.no_of_units?.slice(0, 13).trim() + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  ))}
                </div>

                <div className="col">
                  <p className="row_head mb-2">Package Type</p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      PKG
                      {item?.package_type?.length <= 12 ? (
                        item?.package_type
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.package_type}
                        >
                          <span role="button">
                            {item?.package_type.slice(0, 13).trim() + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  ))}
                </div>

                <div className="col">
                  <p className="row_head mb-2">Total Weight</p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      500 KG
                      {item?.total_weight?.length <= 12 ? (
                        item?.total_weight
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.total_weight}
                        >
                          <span role="button">
                            {item?.total_weight.slice(0, 13).trim() + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  ))}
                </div>

                <div className="col">
                  <p className="row_head mb-2">Total Volume</p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      200 CBM
                      {item?.total_volume?.length <= 12 ? (
                        item?.total_volume
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.total_volume}
                        >
                          <span role="button">
                            {item?.total_volume.slice(0, 13).trim() + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {/* Second row */}
              <div className="row">
                <div className="col">
                  <p className="row_head mb-2">Cargo Type</p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      {item?.cargo_type?.length <= 15 ? (
                        item?.cargo_type
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.cargo_type}
                        >
                          <span role="button">
                            {item?.cargo_type.slice(0, 16).trim() + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  ))}
                </div>

                <div className="col">
                  <p className="row_head mb-2" style={{ width: "150%" }}>
                    Cargo Ready Date
                  </p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      8 Sep, 2024
                      {/* {item?.cargo_ready_date?.length <= 12 ? (
                        item?.cargo_ready_date
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.cargo_ready_date}
                        >
                          <span role="button">
                            {item?.cargo_ready_date?.slice(0, 13).trim() +
                              "..."}
                          </span>
                        </Tooltip>
                      )} */}
                    </p>
                  ))}
                </div>

                <div className="col">
                  <p className="row_head mb-2">HS Code</p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      2768
                      {item?.hs_code?.length <= 12 ? (
                        item?.hs_code
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.hs_code}
                        >
                          <span role="button">
                            {item?.hs_code.slice(0, 13).trim() + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  ))}
                </div>

                <div className="col">
                  <p className="row_head mb-2">Seal Number</p>
                  {ViewBooking?.map((item, index) => (
                    <p key={index} className="row_head2">
                      BS964567
                      {/* {item?.seal_number?.length <= 12 ? (
                        item?.seal_number
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.seal_number}
                        >
                          <span role="button">
                            {item?.seal_number?.slice(0, 13).trim() + "..."}
                          </span>
                        </Tooltip>
                      )} */}
                    </p>
                  ))}
                </div>
              </div>

              {/* Conditional row based on product */}
              {ViewBooking?.map((item, index) =>
                item?.product !== "AIR" ? (
                  <div className="row" key={index}>
                    <div className="col">
                      <p className="row_head mb-2">Container Type</p>
                      <p className="row_head2">
                        {item?.container_type ? (
                          item?.container_type.length <= 40 ? (
                            item?.container_type
                          ) : (
                            <Tooltip
                              placement="topLeft"
                              zIndex={9999}
                              title={item?.container_type}
                            >
                              <span role="button">
                                {item?.container_type.slice(0, 41).trim() +
                                  "..."}
                              </span>
                            </Tooltip>
                          )
                        ) : (
                          <span className="sample-data">40 HC</span>
                        )}
                      </p>
                    </div>

                    <div className="col">
                      <p className="row_head  mb-2">Container Details</p>
                      {newContainerArray?.length > 0 ? (
                        newContainerArray.map((containerItem, i) => (
                          <p key={i} className="row_head2">
                            HLBU1046823
                            {containerItem?.container}
                          </p>
                        ))
                      ) : (
                        <span className="sample-data">HLBU1046823</span>
                      )}
                    </div>

                    {/* <div className="col">
                      <p className="row_head mb-2">Seal Number</p>
                      <p className="row_head2">
                        {item?.seal_number ? (
                          item?.seal_number.length <= 15 ? (
                            item?.seal_number
                          ) : (
                            <Tooltip
                              placement="topLeft"
                              zIndex={9999}
                              title={item?.seal_number}
                            >
                              <span role="button">
                                {item?.seal_number.slice(0, 16).trim() + "..."}
                              </span>
                            </Tooltip>
                          )
                        ) : (
                          <span className="sample-data">BS964567</span>
                        )}
                      </p>
                    </div> */}
                    <div className="col"></div>
                    <div className="col"></div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        {ViewBooking?.map((item) => {
          return (
            <div className="col-5 p-0 mb-3">
              <div className="card h-100">
                <div className="card-header">
                  <p className="Header">Parties</p>
                </div>
                <div className="card-body card_body">
                  <div className="d-flex">
                    <p className="parties_head">Shipper</p>
                    <p className="parties_enterprise">
                      {item?.shipper_name.length <= 56 ? (
                        item?.shipper_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.shipper_name}
                        >
                          <span role="button">
                            {item?.shipper_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="parties_head">Consignee</p>
                    <p className="parties_enterprise">
                      {item?.consignee_name.length <= 56 ? (
                        item?.consignee_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.consignee_name}
                        >
                          <span role="button">
                            {item?.consignee_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="parties_head">Notify</p>
                    <p className="parties_enterprise">
                      {item?.notify_name.length <= 56 ? (
                        item?.notify_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.notify_name}
                        >
                          <span role="button">
                            {item?.notify_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="parties_head">Billing</p>
                    <p className="parties_enterprise">
                      {item?.billing_party_name.length <= 56 ? (
                        item?.billing_party_name
                      ) : (
                        <Tooltip
                          placement="topLeft"
                          zIndex={9999}
                          title={item?.billing_party_name}
                        >
                          <span role="button">
                            {item?.billing_party_name
                              ?.slice(0, 57)
                              ?.trim()
                              ?.split("")
                              ?.join("") + "..."}
                          </span>
                        </Tooltip>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row mt-3 mx-0">
        <div className="col">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Commodity Name</p>
            </div>
            <div
              className="card-body"
              style={{
                height: "112px",
                overflow: "auto",
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "22px",
                letterSpacing: "1%",
              }}
            >
              Pallets Solenoid Viz. Trip Solenoid 220vdc To Drg. No. D2710043
              Item No.1 Rev.02 Hs Code85351000 Invoice No. 92006111 Date
              29.08.2024 Net Wt342.000 Kgs Sb No3696299 Dt02-Sep-24
              {/* {newContainerArray.length <= 4 ? (
                <>
                  {newContainerArray.map((item,i) => {
                    return <p key={i} className="container_para">{item.container}</p>;
                  })}
                </>
              ) : (
                <>
                  {MinContainer.map((item,i) => (
                    <p key={i} className="container_extrapara">{item.container}</p>
                  ))}
                  <span
                    role="button"
                    style={{ color: "#00c4ff" }}
                    className="container_extrapara"
                    onClick={() => handleContOpen()}
                  >
                    Show more...
                  </span>
                </>
              )} */}
              {/* {ViewBooking?.map((item) => {
                return (
                  <p className="container_para">
                    {item?.commodity_name.length <= 50 ? (
                      item?.commodity_name
                    ) : (
                      <Tooltip
                        placement="topLeft"
                        zIndex={9999}
                        title={item?.commodity_name}
                      >
                        <span role="button">
                          {item?.commodity_name
                            ?.slice(0, 49)
                            ?.trim()
                            ?.split("")
                            ?.join("") + "..."}
                        </span>
                      </Tooltip>
                    )}
                  </p>
                );
              })} */}
              {ViewBooking?.map((item) => {
                return <p className="container_para">{item?.commodity_name}</p>;
              })}
              {/* <p className="container_para">{requirementDescription}</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mx-0">
        <div className="col">
          <div className="card h-100">
            <div className="card-header">
              <p className="Header">Special Requirements</p>
            </div>
            <div className="card-body">
              {/* {<p className="container_para">{requirementDescription}</p>} */}
              {<p className="container_para">No records to display</p>}

              {/* <div
                className="requirement_section"
                style={{ padding: "0px 13px" }}
              >
                <div className="textarea_description d-flex justify-content-end">
                  <p
                    className=""
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: "1%",
                      color: "#67788E",
                      marginBottom: "5px",
                    }}
                  >
                    Tell us more about your requirements
                  </p>
                  <p
                    className="m-0"
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: "1%",
                      color: "#67788E",
                    }}
                  >
                    {textCount}/1000
                  </p>
                </div>
                <TextArea
                  value={ViewBooking?.spl_requirements}
                  rows={4}
                  maxLength={1000}
                  readOnly
                  onChange={(e) => setTextInput(e.target.value)}
                  style={{ pointerEvents: "none" }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={openContmodal} width={"703px"} modalref={modalref}>
        <ContainerDetailsModal
          children={containerLists}
          handleContClose={handleContClose}
        />
      </Modal>
      {/* <Dialog
        open={openContmodal}
        onClose={handleContClose}
        aria-labelledby="responsive-dialog-title"
        id="edit_profile_modal_section"
        maxWidth="lg"
        fullWidth={true}
      >
        <DialogContent>
        <ContainerDetailsModal
          children={containerLists}
          handleContClose={handleContClose}
        />
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default ShipmentSummaryForAgent;
