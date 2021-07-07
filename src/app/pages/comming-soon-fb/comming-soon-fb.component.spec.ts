import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingSoonFbComponent } from './comming-soon-fb.component';

describe('CommingSoonFbComponent', () => {
  let component: CommingSoonFbComponent;
  let fixture: ComponentFixture<CommingSoonFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommingSoonFbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingSoonFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
