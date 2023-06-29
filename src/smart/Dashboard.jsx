import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { AppContext } from "contexts/app.context";
import { checkIsAuth } from "helpers/auth.helper";
import { getAllUsers } from "services/user.service";
import TableData from "components/common/TableData";
import { transformAllUsersDataToTable } from "helpers/user.helper";
import { useNavigate } from "react-router-dom";
import {getBooking} from "services/booking.service"
import dayjs from "dayjs"

const Dashboard = () => {
  const navigate = useNavigate();
  const [orderLists, setOrderLists] = useState([]);
  const { user, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    const init = async () => {
      const {success, payload} = await getBooking();
      console.log('in dashboard res', payload)
      if (success) {
        // const tableData = transformAllUsersDataToTable(allUsersData);
       
        console.log('transformData',payload)
        setOrderLists(payload);
      }
    };
    init();
    setLoading(false);
     // eslint-disable-next-line
  }, []);

  const allOrderColums = [
    {
      title: "Order id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Date",
      dataIndex: "dateTime",
      key: "dateTime",
    },
 
    {
      title: "Adult amount",
      dataIndex: "adultAmount",
      key: "email",
    },
    {
      title: "Baby amount",
      dataIndex: "babyAmount",
      key: "email",
    },
    {
      title: "Specification",
      dataIndex: "specification",
      key: "specification",
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      width: "5%",
      render: (item, record) => (
        <Button onClick={() => navigate(`/bookingDetails/${record._id}`)}>View</Button>
      ),
    },
    // {
    //   title: "Edit",
    //   dataIndex: "edit",
    //   key: "edit",
    //   width: "5%",

    //   render: (item, record) => <Button>Edit</Button>,
    // },
    // {
    //   title: "Delete",
    //   dataIndex: "delete",
    //   key: "delete",
    //   width: "5%",
    //   render: (item, record) => <Button>Delete</Button>,
    // },
  ];
  return (
    <StyledDiv className="dashboard">
      <h1>Dashboard</h1>
      {/* {checkIsAuth() ? ( */}
        <div>
          <Row className="myInfo">
            <Col span={6}>Name: {user.name} </Col>
            <Col span={6}>Email:{user.email} </Col>
            <Col span={6}>Phone Number: {user.phoneNumber} </Col>
          </Row>
          <TableData columns={allOrderColums} data={orderLists} />
        </div>
      {/* ) : ( */}
        {/* <h2>Please Login into the system</h2> */}
      {/* )} */}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.dashboard {
    height: 100vh;
    .myInfo {
      margin-bottom: 20px;
    }
  }
`;
export default Dashboard;
