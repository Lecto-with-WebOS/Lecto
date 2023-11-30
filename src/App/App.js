import kind from "@enact/core/kind";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import Panels from "@enact/sandstone/Panels";

import Main from "../views/MainPanel";
import Routable, { Route } from "@enact/ui/Routable";
import css from "./App.module.less";
import Table from "../views/Table";
import Board from "../views/Board";
import { useCallback, useState } from "react";

// const App = kind({
//   name: "App",

//   styles: {
//     css,
//     className: "app"
//   },

//   render: (props) => (
//     <div {...props}>
//       <Panels
//         path="/app/home/settings"
//         onSelectBreadcrumb={this.handleNavigate}
//       >
//         <Route path="app" component={AppPanel}>
//           <Route path="home" component={HomePanel}>
//             <Route path="settings" component={SettingsPanel} />
//           </Route>
//         </Route>
//         <Route path="admin" component={AdminPanel} />
//         <Route path="help" component={HelpPanel} />
//       </Panels>
//     </div>
//   )
// });
const Views = Routable({ navigate: "onNavigate" }, ({ children }) => (
  <div>{children}</div>
));

const App = (props) => {
  // use 'main' for the default path
  const [path, nav] = useState("main");
  // if onNavigate is called with a new path, update the state
  const handleNavigate = useCallback((ev) => nav(ev.path), [nav]);

  return (
    <Views {...props} path={path} onNavigate={handleNavigate}>
      <Route path="main" component={Main} />
      <Route path="table" component={Table} />
      <Route path="board" component={Board} />
    </Views>
  );
};
export default ThemeDecorator(App);
