import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenancesProfComponent } from './soutenances-prof.component';

describe('SoutenancesProfComponent', () => {
  let component: SoutenancesProfComponent;
  let fixture: ComponentFixture<SoutenancesProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutenancesProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenancesProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
