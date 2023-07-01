import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { AppContext } from "contexts/app.context";
import { checkIsAuth } from "helpers/auth.helper";
import { getAllUsers } from "services/user.service";
import TableData from "components/common/TableData";
import { transformAllUsersDataToTable } from "helpers/user.helper";
import { useNavigate } from "react-router-dom";
import { getBooking } from "services/booking.service";
import dayjs from "dayjs";

const Dashboard = () => {
  const navigate = useNavigate();
  const [orderLists, setOrderLists] = useState();
  const { user, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    const init = async () => {
      // const isAdmin = user.role === "admin"
      const { success, payload } = await getBooking();
  //  const transformData = payload.map(item => {
  //   return {
  //     ...item, 
  //     user
  //   }
  // })
      if (success) {
        setOrderLists(payload);
      }
    };
    init();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const allOrderColums = [
    {
      title: "Name",
      dataIndex: "user.name",
      key: "name",
      render: (text, record) => record.user.name,
    },
    {
      title: "Email",
      dataIndex: "user.email",
      key: "email",
      render: (text, record) => record.user.email,
    },
    {
      title: "Phone number",
      dataIndex: "user.phoneNumber",
      key: "phoneNumber",
      render: (text, record) => record.user.phoneNumber,
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
      title: "View",
      dataIndex: "view",
      key: "view",
      width: "5%",
      render: (item, record) => (
        <Button onClick={() => navigate(`/bookingDetails/${record._id}`)}>
          View
        </Button>
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
  const tableDataProps = {
    columns: allOrderColums,
    data: orderLists,
  };
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
        <TableData {...tableDataProps} />
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
