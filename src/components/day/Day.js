import React from 'react';

export default class Day extends React.Component {

    render() {
        const {
            day,
            day: {
                date,
                isCurrentMonth,
                isToday,
                number
            },
            select,
            selected
        } = this.props;
        
        
        return (
                <td key={date.toString()} className={"day" + (isCurrentMonth ? "" : " different-month") + (isToday ? " today" : "")
                    + (date.isSame(selected) ? " selected" : "")}
                    onClick={() => select(day)}>{number}<br/>
                </td>
                );
    }
}