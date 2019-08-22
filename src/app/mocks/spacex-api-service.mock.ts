import { of } from 'rxjs';

const SpacexApiServiceStub = {
  getPreviousLaunches: () => {
    return of([{
      flight_number: 1,
      launch_date_utc: 'Fri, 02 Feb 1996 03:04:05 GMT',
      rocket: {
        rocket_name: 'rocket 1'
      },
      launch_success: true
    }]);
  },

  getLaunchDetails: () => {
    return of({
      flight_number: 1,
      launch_date_utc: 'Fri, 02 Feb 1996 03:04:05 GMT',
      rocket: {
        rocket_name: 'rocket 1'
      },
      launch_success: true,
      links: {
        flickr_images: ['myImageUrl'],
        youtube_id: 'id'
      },
      details: 'description of rocket launch'
    });
  }
};

export const getSpacexApiService = (): any => SpacexApiServiceStub;
