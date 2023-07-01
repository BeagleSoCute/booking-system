import { Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

export const columnsFood = (handleDeleteFood) => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Choice of meat',
      dataIndex: 'meat',
      key: 'meat',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    }, 
    {
      title: 'Specification',
      dataIndex: 'specification',
      key: 'specification',
    }, 
    {
      title: 'Delete',
      key: 'actions',
      render: (text, record) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteFood(record)}
        >
          Delete
        </Button>
      ),
  
    }, 
  ];
  
  export const columnsDrink = (handleDeleteDrink) => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    }, 
    {
      title: 'Specification',
      dataIndex: 'specification',
      key: 'specification',
    }, 
    {
      title: 'Delete',
      key: 'actions',
      render: (text, record) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteDrink(record)}
        >
          Delete
        </Button>
      ),
  
    }, 
  ];