import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import './ShipmentTable.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ViewContainerAction } from '../../../Redux/Actions/ViewContainerAction';

const ShipmentTable = ({tabListNoTitle,contentListNoTitle,setVesselmodalopen,close,rowDatas}) => {
    const container_id = rowDatas?.container?.split("|")[1];
    const dispatch = useDispatch()
    const { agent_exist } = useSelector((state) => state.AgentExist);
    // const container_id = "CAIU2841472"
    // const viewContainerData = useSelector((state) => state.ViewContainer)
    // console.log(viewContainerData)
    // const rowData = viewContainerData?.container[0]

    useEffect(() => {
      if(agent_exist === "Y"){
        dispatch(ViewContainerAction({container_id}))
      }
    }, [])

    

    const [activeTabKey, setActiveTabKey] = useState('Milestones');
        const onTab2Change = (key) => {
                setActiveTabKey(key);
    };

    const handleNextModal =()=>{
      setVesselmodalopen(true)
      close(false)
    }

    // This is for mode logic
    // const ShipmentData = useSelector((state) => state.Booking);
    // const Booking = ShipmentData?.booking?.data;
    // const fileteredMilestone = Booking?.filter((item) => item.id === booking_id);
    // console.log("mode", fileteredMilestone);
    // const mode = fileteredMilestone[0]?.mode
    // console.log(mode)

  return (
    <Card
          style={{
            width:"100%",
            boxShadow: "0px 6px 18px 0px #0000001A"
          }}
          className='mx-auto p-0 shipment_table_section'
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={onTab2Change}
          tabProps={{
          size: 'middle',
          }}
        >

            <div >
              {contentListNoTitle[activeTabKey]}
            </div>
            {/* {
              mode === "AIR" && 
                    <Link 
                        onClick={handleNextModal}
                        className='vessel_button'
                        style={{
                            padding:"14.5px 19.5px",
                            backgroundColor:"#F01E1E",
                            fontWeight:"700",
                            fontSize:"14px",
                            lineHeight:"14.4px",
                            letterSpacing:"-0.02em",
                            borderRadius:"10px",
                            textDecoration:"none",
                            color:"#FFFFFF",
                            position:"absolute",
                            top:"6px",
                            right:"22px", 
                            "& :hover": {
                              backgroundColor: "green"
                            },
                            
                        }}
                    >
                        View Air Tracking
                    </Link>
            } */}
            {/* {
              mode === "LCL" || mode==='FCL'?
                    <Link 
                        onClick={handleNextModal}
                        className='vessel_button'
                        style={{
                            padding:"14.5px 19.5px",
                            backgroundColor:"#F01E1E",
                            fontWeight:"700",
                            fontSize:"14px",
                            lineHeight:"14.4px",
                            letterSpacing:"-0.02em",
                            borderRadius:"10px",
                            textDecoration:"none",
                            color:"#FFFFFF",
                            position:"absolute",
                            top:"6px",
                            right:"22px", 
                            "& :hover": {
                              backgroundColor: "green"
                            },
                            
                        }}
                    >
                        View Vessel Tracking
                    </Link>:null
            } */}
    </Card>
  )
}

export default ShipmentTable