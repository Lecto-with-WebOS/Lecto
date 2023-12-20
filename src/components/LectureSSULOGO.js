import kind from "@enact/core/kind";
import Logo from "../asset/images/lecture_ssu_logo.svg";
import { Link } from "@enact/ui/Routable";

const LectureSSULOGO = kind({
  name: "LectureSSULOGO",

  render: () => (
    <div
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        zIndex: "99"
      }}
    >
      <Link path="/board">
        <img src={Logo} alt="" />
      </Link>
    </div>
  )
});

export default LectureSSULOGO;
