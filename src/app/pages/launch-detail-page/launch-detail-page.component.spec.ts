import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailPageComponent } from './launch-detail-page.component';

describe('LaunchDetailPageComponent', () => {
  let component: LaunchDetailPageComponent;
  let fixture: ComponentFixture<LaunchDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
