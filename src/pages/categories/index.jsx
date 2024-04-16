import ToolBar from "@components/organisms/ToolBar";
import { Card, Button } from "antd";
import { useState } from "react";

function Categories() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
      {isActive&&<ToolBar />}
      <br />
      <Card>
        <h1>Categories</h1>
        <Button onClick={()=>setIsActive(!isActive)}>Toolbar</Button>
      </Card>
    </div>
  );
}

export default Categories;
