import ToolBar from "@components/organisms/ToolBar";
import { Card, Button, Space, Tag, Table } from "antd";
import { useState } from "react";
const columns = ({handleActive}) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
       <Button onClick={handleActive}>Active</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
function Categories() {
  const [isActive, setIsActive] = useState(false)
  function handleActive(){
    setIsActive(!isActive)
  }
  return (
    <div>
      {isActive&&<ToolBar />}
      <br />
      <Card>
        <Table columns={columns({handleActive})} dataSource={data} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vero hic esse error velit vitae veniam inventore aliquam, ipsam doloremque ducimus dolorum, ad fugiat. Minus alias, modi corporis excepturi beatae voluptatem nulla eius magnam provident repellat quidem consectetur assumenda obcaecati soluta recusandae eum saepe facere repellendus. Molestiae ab ea quibusdam eveniet harum, voluptatibus, cupiditate, ipsa nemo libero in maxime cumque sapiente. Nobis repellendus excepturi non sed officiis perferendis fugiat. Totam accusantium voluptatum cupiditate officia nobis ratione quaerat provident commodi ipsum dolores sequi, doloremque assumenda nihil enim! Ab autem eveniet non aut, aperiam excepturi repellat fugit minus. Illum debitis vero qui maxime perspiciatis incidunt eos quod quaerat quas perferendis vel officia soluta iure, blanditiis sed. Adipisci esse nisi odit repudiandae ullam qui nihil, fugit, cumque ab aut quas blanditiis non consequuntur facilis nulla inventore quam optio voluptates maxime nesciunt dignissimos recusandae ea vitae. Mollitia repellendus iste labore reprehenderit, ipsum earum eligendi quod, cupiditate asperiores, ratione similique. Earum quisquam aperiam possimus, maxime omnis ut accusantium harum blanditiis ad doloremque repudiandae delectus praesentium totam similique ipsa itaque iusto consequatur tempore commodi dolorem corrupti modi fugiat eum laudantium! Debitis porro facilis, quisquam itaque aliquid, repudiandae sapiente, nostrum totam repellendus earum ipsum quas dolore quasi!</p>
      </Card>
    </div>
  );
}

export default Categories;
