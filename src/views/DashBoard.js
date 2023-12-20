import styles from "./DashBoard.module.css";
import Header from "../components/dash-board/Header";
import InfomationContainer from "../components/dash-board/InfomationContainer";
import ssu_charactor from "../asset/ssu_character.png";
import { Link } from "@enact/ui/Routable";

const DashBoard = () => {
  return (
    <div className={styles.root}>
      <Header />
      <InfomationContainer />
      <Link
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "9999"
        }}
        path="/main"
      ></Link>
      <img
        src={ssu_charactor}
        alt="Image Description"
        className={styles.fixedImage}
      />
    </div>
  );
};

export default DashBoard;
