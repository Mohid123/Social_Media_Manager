import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamtalkersComponent } from './teamtalkers.component';

describe('TeamtalkersComponent', () => {
  let component: TeamtalkersComponent;
  let fixture: ComponentFixture<TeamtalkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamtalkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamtalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
