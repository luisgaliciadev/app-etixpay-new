import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCredentialsComponent } from './set-credentials.component';

describe('SetCredentialsComponent', () => {
  let component: SetCredentialsComponent;
  let fixture: ComponentFixture<SetCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
