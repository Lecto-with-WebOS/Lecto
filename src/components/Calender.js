import React, { useState, useEffect } from 'react';

const Calender = () => {
    const [dateObject, setDateObject] = useState(new Date());

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
        <div>
            <table>
                <thead>
                    <tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>
                </thead>
                <tbody>
                    {createCalendar(dateObject.getFullYear(), dateObject.getMonth() + 1)}
                </tbody>
            </table>
        </div>
    );
};

export default Calender;