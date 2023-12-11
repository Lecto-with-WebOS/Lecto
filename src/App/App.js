import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import Main from "../views/MainPanel";
import Routable, { Route } from "@enact/ui/Routable";
import Table from "../views/Table";

import { useCallback, useEffect, useState } from "react";
import tableData from "../tableData.json";
import detailData from "../detailData.json";
import DashBoard from "../views/DashBoard";

const Views = Routable({ navigate: "onNavigate" }, ({ children }) => (
  <div>{children}</div>
));

const App = (props) => {
  // use 'main' for the default path
  const [path, nav] = useState("main");
  // if onNavigate is called with a new path, update the state
  const handleNavigate = useCallback((ev) => nav(ev.path), [nav]);
  useEffect(() => {
    try {
      // 로컬 스토리지에 데이터 저장
      window.localStorage.setItem("tableData", JSON.stringify(tableData.table));
      window.localStorage.setItem(
        "detailData",
        JSON.stringify(detailData.detail)
      );

      console.log("JSON 데이터가 로컬 스토리지에 등록되었습니다.");
    } catch (error) {
      console.error("LocalStorage Error", error);
    }
  }, []);

  return (
    <Views {...props} path={path} onNavigate={handleNavigate}>
      <Route path="main" component={Main} />
      <Route path="table" component={Table} />
      <Route path="board" component={DashBoard} />
    </Views>
  );
};
export default ThemeDecorator(App);
