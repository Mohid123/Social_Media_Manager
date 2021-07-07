import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonIgComponent } from './coming-soon-ig.component';

describe('ComingSoonIgComponent', () => {
  let component: ComingSoonIgComponent;
  let fixture: ComponentFixture<ComingSoonIgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonIgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonIgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
