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

const getCurIntegerTime = (date) => {
  return (parseInt(date.getHours()) * 100 + parseInt(date.getMinutes()));
}

const getLectureIndex = (x) => {
  const ranges = [800, 900, 1030, 1200, 1330, 1500, 1630, 1800, 1930, 2100];

  for (let i = 0; i < ranges.length; ++i)
    if (x >= ranges[i] && x <= ranges[i] + 115)
      return i;
  return 0;
}

const getLectureStartTime = (x) => {
  const ranges = [800, 900, 1030, 1200, 1330, 1500, 1630, 1800, 1930, 2100];

  for (let i = 0; i < ranges.length; ++i)
    if (x >= ranges[i] && x <= ranges[i] + 115) {
      var str = ranges[i].toString();
      return str.slice(0, -2) + ':' + str.slice(-2);
    }
  return 0;
}

const getLectureEndTime = (x) => {
  const ranges = [800, 900, 1030, 1200, 1330, 1500, 1630, 1800, 1930, 2100];

  for (let i = 0; i < ranges.length; ++i)
    if (x >= ranges[i] && x <= ranges[i] + 115) {
      var str = (ranges[i] + 115).toString();
      return str.slice(0, -2) + ':' + str.slice(-2);
    }
  return 0;
}

const Main = () => {
  const timetable = JSON.parse(window.localStorage.getItem("tableData"));
  console.log(timetable);
  var date = new Date();
  var dayOfWeek = date.getDay() - 1;
  let todayTable = timetable[dayOfWeek];
  console.log(todayTable);
  console.log(getCurIntegerTime(date));

  // != 0 이면 수업 중. 1140는 11시 40분을 의미.
  // test 용도
  // var lectureIdx = getLectureIndex(1600);  
  var lectureIdx = getLectureIndex(getCurIntegerTime(date));
  let lectureId = todayTable[lectureIdx];

  const lectures = JSON.parse(window.localStorage.getItem("detailData"));
  const lecture = lectures[lectureId];
  const lectureName = lecture.title;
  const professorName = lecture.professor;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"
      }}
    >
      <LectureSSULOGO
        style={{
          width: "150px",
          height: "150px"
        }}
      />
      <div
        style={{
          width: "100%",

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

            backgroundColor: "#EAF0F4",
            borderRadius: "20px"
          }}
        >
          <div
            style={{
              width: "900px",
              paddingTop: "80px"
            }}
          >
            {lectureId ? (
              <>
                <LectureTitle text={lectureName} />
                <IconTextPerson text={professorName + " 교수님"} />
                <IconTextPeople text="학생 수 : (23/25)" />
                <IconTextTime text={"수업 시간 : " + getLectureStartTime(getCurIntegerTime(date)) + " ~ " + getLectureEndTime(getCurIntegerTime(date))} />
                <LectureProgressBar amount={0.65} start="15:00" end="17:45" />
              </>
            ) : (
              <div style={{ paddingTop: '200px' }}><LectureTitle text="현재 수업중인 강의가 없습니다." /></div>
            )}
          </div>
        </div>
        <LectureStudyingHorse />
      </div>
      <LectureFooter
        classroom_name="숭덕경상관 02112 (PC실습실)"
        temperature="24°"
        current_time={date.getHours() + ':' + date.getMinutes()}
        yyyy_mm_dd={date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()}
      />
    </div>
  );
};

export default Main;
