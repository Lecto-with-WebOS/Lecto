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
        alignItems: "center",
        border: "2px solid",
        borderColor: "red"
      }}
    >
      <ProgressBar
        progress={amount}
        style={{
          width: "100%",
          height: "15px",
          border: "2px solid",
          borderColor: "green"
        }}
      />
      <div
        style={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid",
          borderColor: "green"
        }}
      >
        <span
          style={{
            fontsize: "150px",
            border: "2px solid",
            borderColor: "brown"
          }}
        >
          {start}
        </span>
        <span
          style={{
            fontsize: "150px",
            border: "2px solid",
            borderColor: "brown"
          }}
        >
          {end}
        </span>
      </div>
    </div>
  )
});

export default LectureProgressBar;