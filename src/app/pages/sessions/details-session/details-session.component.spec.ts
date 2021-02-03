import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSessionComponent } from './details-session.component';

describe('DetailsSessionComponent', () => {
  let component: DetailsSessionComponent;
  let fixture: ComponentFixture<DetailsSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
