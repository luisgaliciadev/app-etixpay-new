import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPersonalInfoComponent } from './set-personal-info.component';

describe('SetPersonalInfoComponent', () => {
  let component: SetPersonalInfoComponent;
  let fixture: ComponentFixture<SetPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetPersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
