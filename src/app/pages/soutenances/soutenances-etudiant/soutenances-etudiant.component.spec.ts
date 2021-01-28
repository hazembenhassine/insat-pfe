import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenancesEtudiantComponent } from './soutenances-etudiant.component';

describe('SoutenancesEtudiantComponent', () => {
  let component: SoutenancesEtudiantComponent;
  let fixture: ComponentFixture<SoutenancesEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutenancesEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenancesEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
