import React from 'react';
import  moment from 'moment';
import 'moment/locale/pl';
import '../../css/Calendar.css';
import DayNames from '../dayNames/DayNames';
import Week from '../week/Week';

export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            month: moment().startOf("day"),
            selected: moment().startOf("day")
        };
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    prevMonth() {
        const {month} = this.state;
        this.setState({
            month: month.subtract(1, 'month')
        });
    }

    nextMonth() {
        const {month} = this.state;
        this.setState({
            month: month.add(1, 'month')
        });
    }

    select(day) {
        this.setState({
            selected: day.date,
            month: day.date.clone(),
        });
    }

    renderWeeks() {
        let weeks = [];
        let count = 0;
        let done = false;

        let date = this.state.month.clone().startOf("month").subtract("w", 1).day("Poniedziałek");
        let monthIndex = date.month();

        const {selected, month } = this.state;

        while (!done) {
            weeks.push(
                    <Week key={date.toString()}
                          date={date.clone()}
                          month={month}
                          selected={selected}
                          select={(day) => this.select(day)}/>
                    );
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
        return weeks;
    }
    ;
            monthAndYearLabel() {
        const {month} = this.state;
        return <tr className="period">
            <th onClick={this.prevMonth} id="prev">&#10094;</th>
            <th onClick={this.nextMonth} id="next">&#10095;</th>
            <th id="month">{month.format("MMMM")}</th>
            <th id="year">{month.format("YYYY")}</th>
        </tr>;
    }

    render() {
        return (
                <div className="Calendar">
                    <table>
                        <thead>
                            {this.monthAndYearLabel()}
                        <DayNames/>
                        </thead>
                        <tbody>
                            {this.renderWeeks()}
                        </tbody>
                    </table>
                </div>
                );
    }
};
