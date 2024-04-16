import { Route, Routes } from "react-router-dom";
import routes from "./routes";
function RoutesApp() {
  return (
    <Routes>
      {routes?.map((item) => (
        <Route key={item?.id} element={<item.template />}>
          <Route path={item?.path} element={<item.element />} />
        </Route>
      ))}
    </Routes>
  );
}

export default RoutesApp;
