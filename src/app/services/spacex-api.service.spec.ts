/* tslint:disable:no-unused-variable */
// Angular
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

// Services
import { SpacexApiService } from './spacex-api.service';

// Mocks
import { getLaunchesListMock, getLaunchDetailMock } from 'src/app/mocks';

describe('Service: SpacexApi', () => {
  let service: SpacexApiService;
  let spacexApi: HttpTestingController;

  let getPastLaunchesUrl = 'https://api.spacexdata.com/v3/launches/past';
  getPastLaunchesUrl += '?limit=9&offset=0&order=desc&filter=flight_number,launch_date_utc,rocket/rocket_name,launch_success';

  let getLaunchDetailsUrl = 'https://api.spacexdata.com/v3/launches/1';
  getLaunchDetailsUrl += '?filter=flight_number,launch_date_utc,rocket/rocket_name,';
  getLaunchDetailsUrl += 'launch_success,links/flickr_images,details,links/youtube_id';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [SpacexApiService]
    });
    service = TestBed.get(SpacexApiService);
  });

  beforeEach(inject([HttpTestingController], (mockSpacexApi: HttpTestingController) => {
    spacexApi = mockSpacexApi;
  }));

  it('should make a GET request and return array of launch details', async(() => {
    const response = getLaunchesListMock([{
      flight_number: 1,
      launch_date_utc: 'my_date',
      rocket: {
        rocket_name: 'rocket 1'
      },
      launch_success: true
    }]);

    // Set up our expectation
    service.getPreviousLaunches(1).subscribe(next => {
      expect(next).toEqual(response);
    });

    // Mock the request
    spacexApi.match({
      url: getPastLaunchesUrl,
      method: 'GET'
    })[0].flush(response);
  }));

  it('should make a GET request and return an object with launch details', async(() => {
    const response = getLaunchDetailMock();

    // Set up our expectation
    service.getLaunchDetails('1').subscribe(next => {
      expect(next).toEqual(response);
    });

    // Mock the request
    spacexApi.match({
      url: getLaunchDetailsUrl,
      method: 'GET'
    })[0].flush(response);
  }));
});
