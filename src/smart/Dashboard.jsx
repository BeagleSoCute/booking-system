import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { AppContext } from "contexts/app.context";
import TableData from "components/common/TableData";
import { useNavigate } from "react-router-dom";
import { getBooking } from "services/booking.service";
import { getMyData } from "services/user.service";

const Dashboard = () => {
  const navigate = useNavigate();
  const [orderLists, setOrderLists] = useState();
  const {user, setUser} = useContext(AppContext);

  useEffect(() => {
    const init = async () => {
      const { success, payload } = await getBooking();
      if (success) {
        setOrderLists(payload);
      }
    };
    init();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const init = async () => {
      const userData = await getMyData();
      if(userData.success){
        setUser(userData.payload)
      }
    };
      init();
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
  ];
  const tableDataProps = {
    columns: allOrderColums,
    data: orderLists,
  };
  return (
    <StyledDiv className="dashboard">
      <h1>Dashboard</h1>
      <div>
        <Row className="myInfo">
          <Col span={6}>Name: {user?.name} </Col>
          <Col span={6}>Role: {user?.role} </Col>
          <Col span={6}>Email:{user?.email} </Col>
          <Col span={6}>Phone Number: {user?.phoneNumber} </Col>
        </Row>
        <TableData {...tableDataProps} />
      </div>
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
