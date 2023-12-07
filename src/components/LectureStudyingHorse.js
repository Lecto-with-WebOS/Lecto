import kind from "@enact/core/kind";
import StudyingHorse from "../asset/images/lecture_studying_horse.svg";

const LectureStudyingHorse = kind({
  name: "LectureStudyingHorse",

  render: () => (
    <div
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        marginTop: "550px",
        marginRight: "300px",
        alignItems: "center"
      }}
    >
      <img src={StudyingHorse} alt="" />
    </div>
  )
});

export default LectureStudyingHorse;
