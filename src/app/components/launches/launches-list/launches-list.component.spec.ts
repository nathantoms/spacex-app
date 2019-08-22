/* tslint:disable:no-unused-variable */
// Anuglar
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Components
import { LaunchesListComponent } from './launches-list.component';

// Services
import { SpacexApiService } from 'src/app/services';

// Models
import { LaunchesListItem } from 'src/app/models';

// Mocks
import * as fromMocks from '../../../mocks/index';

describe('LaunchesListComponent', () => {
  let component: LaunchesListComponent;
  let fixture: ComponentFixture<LaunchesListComponent>;

  let spacexApiService: SpacexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ LaunchesListComponent ],
      providers: [ { provide: SpacexApiService, useValue: fromMocks.getSpacexApiService() }]
    });
    fixture = TestBed.createComponent(LaunchesListComponent);
    component = fixture.componentInstance;

    spacexApiService = fixture.debugElement.injector.get(SpacexApiService);
    fixture.detectChanges();
  });

  it('should call spacex api service to get previous launches', () => {
    spyOn(spacexApiService, 'getPreviousLaunches').and.callThrough();

    component.getMoreLaunches();
    fixture.detectChanges();

    expect(spacexApiService.getPreviousLaunches).toHaveBeenCalledWith(2);
  });

  it('should call spacex api service and set the launches list', () => {
    const expectedLaunch: LaunchesListItem = {
      flightNumber: 1,
      launchDate: 'Fri, 02 Feb 1996 03:04:05 GMT',
      rocketName: 'rocket 1',
      launchStatus: true
    };
    expect(component.launchesList.length).toBe(1);

    component.getMoreLaunches();
    fixture.detectChanges();

    expect(component.launchesList.length).toBe(2);
    expect(component.launchesList[0]).toEqual(expectedLaunch);
  });
});
