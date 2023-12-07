import kind from "@enact/core/kind";
import { ProgressBar } from "@enact/sandstone/ProgressBar";

const LectureProgressBar = kind({
  name: "LectureProgressBar",

  render: ({ amount, start, end }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "25px",
        alignItems: "center"
      }}
    >
      <ProgressBar
        progress={amount}
        style={{
          width: "100%",
          height: "15px"
        }}
      />
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span
          style={{
            fontsize: "150px"
          }}
        >
          {start}
        </span>
        <span
          style={{
            fontsize: "150px"
          }}
        >
          {end}
        </span>
      </div>
    </div>
  )
});

export default LectureProgressBar;
