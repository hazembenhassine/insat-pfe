import {Component, OnInit, Inject, LOCALE_ID, HostListener, Input, Output, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

import {
  endOfDay,
  addMonths
} from 'date-fns';
import {
  DAYS_IN_WEEK,
  SchedulerViewHourSegment,
  startOfPeriod,
  endOfPeriod,
  addPeriod,
  subPeriod,
  SchedulerDateFormatter,
} from 'angular-calendar-scheduler';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter
} from 'angular-calendar';
import {Session} from "../../../../core/models/sessions.model";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  providers: [{
    provide: CalendarDateFormatter,
    useClass: SchedulerDateFormatter
  }],
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  @Input() reservedDates: [string];
  @Input() stepper;
  @Input() session: Session;
  @Output() onSelectTimeslot = new EventEmitter<string>();

  title: string = 'Angular Calendar Scheduler Demo';
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  viewDays: number = DAYS_IN_WEEK;
  refresh: Subject<any> = new Subject();
  locale: string = 'fr';
  hourSegments: number = 1;
  weekStartsOn: number = 1;
  startsWithToday: boolean = true;
  excludeDays: number[] = [0]; // [0];
  dayStartHour: number = 8;
  dayEndHour: number = 16;
  minDate: Date;
  maxDate: Date;
  dayModifier: Function;
  hourModifier: Function;
  segmentModifier: Function;
  prevBtnDisabled: boolean = false;
  nextBtnDisabled: boolean = false;
  events = "Hours here"

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustViewDays();
  }

  constructor(@Inject(LOCALE_ID) locale: string,
              private dateAdapter: DateAdapter) {
    this.locale = locale;

  }

  ngOnInit(): void {
    this.minDate = new Date(String(this.session.startDate))
    this.maxDate = new Date(String(this.session.endDate))
    this.segmentModifier = ((segment: SchedulerViewHourSegment): void => {
      segment.isDisabled = !this.isDateValid(segment.date);
      segment.backgroundColor = !this.isDateValid(segment.date) ? "#cccccc" : ""
      segment.cssClass = this.isDateValid(segment.date) ? "segment-enabled" : "segment-disabled"
    }).bind(this);
    this.adjustViewDays();
    this.dateOrViewChanged();
  }

  adjustViewDays(): void {
    // See 'Responsive breakpoints' at https://getbootstrap.com/docs/4.1/layout/overview/
    const currentWidth: number = window.innerWidth;
    if (currentWidth <= 576) {          // Extra small devices (portrait phones, less than 576px)
      this.viewDays = 1;
    } else if (currentWidth <= 768) {   // Small devices (landscape phones, less than 768px)
      this.viewDays = 3;
    } else {
      this.viewDays = DAYS_IN_WEEK;
    }
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  changeView(view: CalendarView): void {
    this.view = view;
    this.dateOrViewChanged();
  }

  dateOrViewChanged(): void {
    if (this.startsWithToday) {
      this.prevBtnDisabled = !this.isDateValid(subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
      this.nextBtnDisabled = !this.isDateValid(addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1));
    } else {
      this.prevBtnDisabled = !this.isDateValid(endOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, subPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
      this.nextBtnDisabled = !this.isDateValid(startOfPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, addPeriod(this.dateAdapter, CalendarView.Day/*this.view*/, this.viewDate, 1)));
    }

    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }

  private isDateValid(date: Date): boolean {

    return !this.reservedDates.includes(date.toISOString()) && date >= this.minDate && date <= this.maxDate;
  }

  segmentClicked(action: string, segment: SchedulerViewHourSegment): void {
    this.onSelectTimeslot.emit(segment.date.toISOString())
    this.stepper.next()
  }


}
