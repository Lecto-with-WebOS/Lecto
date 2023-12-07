import kind from "@enact/core/kind";
import BodyText from "@enact/sandstone/BodyText";

import LectureClock from "../asset/images/lecture_clock.svg";

const IconTextTime = kind({
  name: "IconTextTime",

  render: ({ text }) => (
    <div style={{ display: "flex", margin: "25px", alignItems: "center" }}>
      <img
        src={LectureClock}
        style={{ width: "50px", height: "50px" }}
        alt=""
      />
      <BodyText
        style={{
          color: "black",
          fontSize: "40px",
          textAlign: "center",
          marginTop: "25px"
        }}
      >
        {text}
      </BodyText>
    </div>
  )
});

export default IconTextTime;
