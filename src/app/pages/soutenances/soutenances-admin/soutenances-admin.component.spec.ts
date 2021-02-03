import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenancesAdminComponent } from './soutenances-admin.component';

describe('SoutenancesAdminComponent', () => {
  let component: SoutenancesAdminComponent;
  let fixture: ComponentFixture<SoutenancesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutenancesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenancesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
