// Angglar
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Components
import { LaunchDetailComponent } from './launch-detail.component';

// Services
import { SpacexApiService } from 'src/app/services';

// Models
import { LaunchDetails } from 'src/app/models';

// Mocks
import * as fromMocks from '../../../mocks/index';

describe('LaunchDetailComponent', () => {
  let component: LaunchDetailComponent;
  let fixture: ComponentFixture<LaunchDetailComponent>;

  let spacexApiService: SpacexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ LaunchDetailComponent ],
      providers: [ { provide: SpacexApiService, useValue: fromMocks.getSpacexApiService() }]
    });
    fixture = TestBed.createComponent(LaunchDetailComponent);
    component = fixture.componentInstance;

    spacexApiService = fixture.debugElement.injector.get(SpacexApiService);
  });

  it('should call spacex api service to get launch details', () => {
    spyOn(spacexApiService, 'getLaunchDetails').and.callThrough();

    component.launchNumber = 1;
    fixture.detectChanges();

    expect(spacexApiService.getLaunchDetails).toHaveBeenCalledWith('1');
  });

  it('should call spacex api service and set the launch details', () => {
    const expectedLaunch: LaunchDetails = {
      flightNumber: 1,
      launchDate: 'Fri, 02 Feb 1996 03:04:05 GMT',
      rocketName: 'rocket 1',
      launchStatus: true,
      images: ['myImageUrl'],
      videoId: 'id',
      details: 'description of rocket launch'
    };
    expect(component.launch).toBeFalsy();

    component.launchNumber = 1;
    fixture.detectChanges();

    expect(component.launch).toBeTruthy();
    expect(component.launch).toEqual(expectedLaunch);
  });
});
