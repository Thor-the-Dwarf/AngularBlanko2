import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirektivenComponent } from './direktiven.component';

describe('DirektivenComponent', () => {
  let component: DirektivenComponent;
  let fixture: ComponentFixture<DirektivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirektivenComponent]
    });
    fixture = TestBed.createComponent(DirektivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
