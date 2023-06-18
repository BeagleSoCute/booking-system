import React from 'react'; 
import {Row, Col} from 'antd';

const DisplayTables = (tableData) => {
    return(
        <StyledDiv className="display-tables">
            {tableData.map(item => <Row>
                <Col span={6}>
                    
                </Col>

            </Row>)}
        </StyledDiv>
    ) 
}

const StyledDiv = styled.div`
  &.display-tables {
  }
`;
export default DisplayTables;