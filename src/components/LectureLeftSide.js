import kind from "@enact/core/kind";
import LeftSide from "../asset/images/lecture_leftside.svg";

const LectureLeftSide = kind({
  name: "LectureLeftSide",

  render: () => (
    <div
      style={{
        zIndex: "1",
        width: "100px",
        height: "100px",
        display: "flex",
        marginTop: "350px",
        alignItems: "center"
      }}
    >
      <img src={LeftSide} alt="" />
    </div>
  )
});

export default LectureLeftSide;
