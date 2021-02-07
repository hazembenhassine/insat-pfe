import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import * as moment from 'moment';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-dashboard-professor',
  templateUrl: './dashboard-professor.component.html',
  styleUrls: ['./dashboard-professor.component.scss']
})
export class DashboardProfessorComponent implements OnInit {

  moment = moment;

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: moment().startOf('day').toDate(),
      end: moment().add(1, 'day').toDate(),
      title: 'A 3 day event',
      color: colors.red
    },
    {
      start: moment().startOf('day').toDate(),
      title: 'An event with no end date',
      color: colors.yellow
    }
  ];

  activeDayIsOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (moment(date).month() === moment(this.viewDate).month()) {
      this.activeDayIsOpen = !((moment(this.viewDate).day() === moment(date).day() && this.activeDayIsOpen === true) ||
        events.length === 0);
      this.viewDate = date;
    }
  }

}
