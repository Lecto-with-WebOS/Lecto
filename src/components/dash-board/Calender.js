import React, { useState, useEffect } from 'react';
import styles from './Calender.module.css';

const Calender = () => {
    const [dateObject, setDateObject] = useState(new Date());

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    useEffect(() => {
        let timer = setInterval(() => {
            setDateObject(new Date());
        }, 1000);

        return function cleanup() {
            clearInterval(timer);
        }
    }, []);

    const createCalendar = (year, month) => {
        let mon = month - 1;
        let d = new Date(year, mon);

        let weeks = [];
        let week = [];

        for (let i = 0; i < getDay(d); i++) {
            week.push(<td></td>);
        }

        while (d.getMonth() === mon) {
            week.push(<td>{d.getDate()}</td>);

            if (getDay(d) % 7 === 6) {
                weeks.push(<tr>{week}</tr>);
                week = [];
            }

            d.setDate(d.getDate() + 1);
        }

        if (getDay(d) !== 0) {
            for (let i = getDay(d); i < 7; i++) {
                week.push(<td></td>);
            }
        }

        weeks.push(<tr>{week}</tr>);

        return weeks;
    }

    const getDay = (date) => {
        let day = date.getDay();
        if (day === 0) day = 7;
        return day - 1;
    }


    return (
        <div className={styles.calenderMain}>
             <div className={styles.monthYear}>{monthNames[dateObject.getMonth()]} {dateObject.getFullYear()}</div>
            <table>
                <thead>
                    <tr>
                        <th>Su</th>
                        <th>Mo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fi</th>
                        <th>Sa</th>
                    </tr>
                </thead>
                <tbody>
                    {createCalendar(dateObject.getFullYear(), dateObject.getMonth() + 1)}
                </tbody>
            </table>
        </div>
    );
};

export default Calender;