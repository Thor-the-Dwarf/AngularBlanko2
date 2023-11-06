import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeichernComponent } from './speichern.component';

describe('SpeichernComponent', () => {
  let component: SpeichernComponent;
  let fixture: ComponentFixture<SpeichernComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeichernComponent]
    });
    fixture = TestBed.createComponent(SpeichernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
