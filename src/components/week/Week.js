import React from 'react';
import Day from '../day/Day';

export default class Week extends React.Component {
    render() {
        let days = [];
        let {date} = this.props;
        const {month, select, selected} = this.props;

        for (let i = 0; i < 7; i++) {
            let day = {
                name: date.format("dd"),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };
            days.push(
                    <Day key={day.name} 
                         day={day}
                         selected={selected}
                         select={select}/>
                    );
            date = date.clone();
            date.add(1, "day");
        }

        return (
                <tr key={days[0]}>
                    {days}
                </tr>
                )
    }
};