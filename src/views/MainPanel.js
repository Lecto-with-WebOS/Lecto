import kind from "@enact/core/kind";
// import { Link } from "@enact/ui/Routable";

import IconTextTime from "../components/IconTextTime";
import IconTextPerson from "../components/IconTextPerson";
import IconTextPeople from "../components/IconTextPeople";
import LectureTitle from "../components/LectureTitle";
import LectureProgressBar from "../components/LectureProgressBar";
import LectureLeftSide from "../components/LectureLeftSide";
import LectureStudyingHorse from "../components/LectureStudyingHorse";
import LectureSSULOGO from "../components/LectureSSULOGO";
import LectureFooter from "../components/LectureFooter";

const Main = kind({
  name: "MainPanel",

  render: () => (
    <div
      style={{
        border: "2px solid",
        borderColor: "blue",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"
      }}
    >
      <LectureSSULOGO
        style={{
          width: "150px",
          height: "150px",
          border: "2px solid",
          borderColor: "purple"
        }}
      />
      {/* <div style={{ zIndex: "-1",, width: "1580px", height: "744px"}}><text>123</text></div> */}
      <div
        style={{
          width: "100%",
          border: "2px solid",
          borderColor: "purple",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <LectureLeftSide />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "1670px",
            height: "750px",
            marginLeft: "250px",
            border: "2px solid",
            borderColor: "green",
            backgroundColor: "#EAF0F4",
            borderRadius: "20px"
          }}
        >
          <div
            style={{
              width: "900px",
              border: "2px solid",
              borderColor: "yellow"
            }}
          >
            <LectureTitle text="webOS 오픈소스 실전 프로젝트" />
            <IconTextPerson text="오재덕 교수님" />
            <IconTextPeople text="학생 수 : (23/25)" />
            <IconTextTime text="수업 시간 : 15:00 ~ 17:45" />
            <LectureProgressBar amount={0.65} start="15:00" end="17:45" />
          </div>
        </div>
        <LectureStudyingHorse />
      </div>
      <LectureFooter
        classroom_name="숭덕경상관 02112 (PC실습실)"
        temperature="24°"
        current_time="15:09"
        yyyy_mm_dd="2023/11/28"
      />
    </div>
  )
});

export default Main;
