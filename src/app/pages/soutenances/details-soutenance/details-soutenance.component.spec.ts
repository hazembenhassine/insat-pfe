import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSoutenanceComponent } from './details-soutenance.component';

describe('DetailsSoutenanceComponent', () => {
  let component: DetailsSoutenanceComponent;
  let fixture: ComponentFixture<DetailsSoutenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSoutenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
