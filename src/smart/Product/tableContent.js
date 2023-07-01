import { Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

export const columnsFood = (handleDeleteFood) => [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
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
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
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

  export const columnsMeat = (handleDeleteMeat) => [
    {
      title: 'Meat',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Delete',
      key: 'actions',
      render: (text, record) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteMeat(record)}
        >
          Delete
        </Button>
      ),
  
    }, 
  ];