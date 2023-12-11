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
  return -1;
}

const getLectureStartIntTime = (x) => {
  const ranges = [800, 900, 1030, 1200, 1330, 1500, 1630, 1800, 1930, 2100];

  for (let i = 0; i < ranges.length; ++i)
    if (x >= ranges[i] && x <= ranges[i] + 115)
      return ranges[i];
  return 0;
}

const getLectureStartStrTime = (x) => {
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

const getProgressRatio = (time) => {
  var sTime = getLectureStartIntTime(time);
  var passedTime = 0;
  if (time < sTime + 100)
    passedTime = time - sTime;
  else
    passedTime = 60 + time - sTime - 100;
  return passedTime / 75.0;
}

const Main = () => {
  const timetable = JSON.parse(window.localStorage.getItem("tableData"));
  console.log(timetable);
  var date = new Date();
  var dayOfWeek = date.getDay() - 1;
  let todayTable = timetable[dayOfWeek];

  // lectureIdx >= 0 이면 수업 중.
  // var lectureIdx = getLectureIndex(testTime);
  // var testTime = 1230; // 현재 시간이 12시 30분
  var lectureIdx = getLectureIndex(getCurIntegerTime(date))
  let lectureId = todayTable[lectureIdx];

  const lectures = JSON.parse(window.localStorage.getItem("detailData"));
  var lecture;
  var lectureName;
  var professorName;

  if (lectureId < 0) {
    lecture = lectures[lectureId];
    lectureName = lecture.title;
    professorName = lecture.professor;
  }

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
                <IconTextTime text={"수업 시간 : " + getLectureStartStrTime(getCurIntegerTime(date)) + " ~ " + getLectureEndTime(getCurIntegerTime(date))} />
                <LectureProgressBar amount={0.65} start={getLectureStartStrTime(getCurIntegerTime(date))} end={getLectureEndTime(getCurIntegerTime(date))} />
                {/* <IconTextTime text={"수업 시간 : " + getLectureStartStrTime(testTime) + " ~ " + getLectureEndTime(testTime)} />
                <LectureProgressBar amount={getProgressRatio(testTime)} start={getLectureStartStrTime(testTime)} end={getLectureEndTime(testTime)} /> */}
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
