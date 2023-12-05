import React from "react";
import styles from "./Table.module.css";

const Table = () => {
  const timetable = [
    [null, 1, null, null, 2, 3, 4, 4, null, null],
    [null, 5, 6, 6, null, 3, 7, null, null, null],
    [null, 1, 8, null, 2, 9, 9, null, null, null],
    [null, 5, 10, null, null, 11, 11, 12, 12, 12],
    [null, null, 13, 13, null, null, 7, null, null, null],
    [14, 15, 15, 15, null, null, null, null, null, null]
  ];
  const transposedData = timetable[0].map((_, colIndex) =>
    timetable.map((row) => row[colIndex])
  );

  const detailData = JSON.parse(window.localStorage.getItem("detailData"));

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.header}></div>
        <div className={styles.header}>MON</div>
        <div className={styles.header}>TUE</div>
        <div className={styles.header}>WED</div>
        <div className={styles.header}>THU</div>
        <div className={styles.header}>FRI</div>
        <div className={styles.header}>SAT</div>
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
    </div>
  );
};

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

export default Table;
