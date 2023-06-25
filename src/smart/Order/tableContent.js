import { Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

export const columnsFood = (handleDeleteFood) => [
    {
      title: 'Food',
      dataIndex: 'food',
      key: 'food',
    },
    {
      title: 'Choice of meat',
      dataIndex: 'choiceOfMeat',
      key: 'choiceOfMeat',
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
      title: 'Drink',
      dataIndex: 'drink',
      key: 'food',
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