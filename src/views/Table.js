import React from "react";
import styles from "./Table.module.css";
import ssung from "../asset/images/table_ssung.svg";
import goBack from "../asset/images/table_back.svg";
import { Link } from "@enact/ui/Routable";

const Table = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const timetable = JSON.parse(window.localStorage.getItem("tableData"));

  const transposedData = timetable[0].map((_, colIndex) =>
    timetable.map((row) => row[colIndex])
  );

  const detailData = JSON.parse(window.localStorage.getItem("detailData"));
  const getScheduleTime = (index) => {
    const scheduleTimes = [
      "08:00-08:50",
      "09:00-10:15",
      "10:30-11:45",
      "12:00-13:15",
      "13:30-14:45",
      "15:00-16:15",
      "16:30-17:45",
      "18:00-19:15",
      "19:30-20:45",
      "21:00-22:15"
    ];
    return scheduleTimes[index];
  };
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.header}></div>
        {days.map((day) => (
          <div key={day} className={styles.header}>
            {day}
          </div>
        ))}
        {transposedData?.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className={styles.time}>
              {`${rowIndex + 1}교시`} <br />
              {`(${getScheduleTime(rowIndex)}
                )`}
            </div>
            {row.map((cell, cellIndex) =>
              cell ? (
                <div
                  key={cellIndex}
                  className={styles.subjectCell}
                  style={{ backgroundColor: detailData[cell].color }}
                >
                  {detailData[cell].title}
                </div>
              ) : (
                <div key={cellIndex} className={styles.emptyCell}></div>
              )
            )}
          </React.Fragment>
        ))}
      </div>
      <Link path="/main" className={styles.btnWrapper}>
        <img className={styles.ssung} src={ssung} alt="ssung" />
        <img className={styles.goBack} src={goBack} alt="goBackBtn" />
      </Link>
    </div>
  );
};

export default Table;
