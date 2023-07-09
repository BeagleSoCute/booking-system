import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserDetails } from "services/user.service";

const ShowUserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const init = async () => {
      const { success, details } = await getUserDetails(userId);
      if (success) {
        setUser(details);
      }
      return;
    };
    init();
    // eslint-disable-next-line
  }, []);
  return (
    <StyledDiv className="show-user-details">
      <p>Name: {user.name}</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.show-user-details {
  }
`;

export default ShowUserDetails;
