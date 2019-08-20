// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RXJS
import { Observable } from 'rxjs';

const API_BASE = 'https://api.spacexdata.com/v3';
const LAUNCH_LIST_SIZE = 9;

@Injectable()
export class SpacexApiService {

  constructor(private http: HttpClient) { }

  /**
   * @description
   * Get previous SpaceX launches in Paginated form
   *
   * @param page number of page request
   */
  public getPreviousLaunches(page: number): Observable<any> {
    try {
      const queryUrl = '/launches/past';

      const recordLimit = 'limit=' + LAUNCH_LIST_SIZE.toString();
      const offset = '&offset=' + (LAUNCH_LIST_SIZE * (page - 1)).toString();
      const order = '&order=desc';
      const fieldFilter = '&filter=flight_number,launch_date_utc,rocket/rocket_name,launch_success';

      return this.http.get(
        this.buildQuery(
          queryUrl,
          recordLimit + offset + order + fieldFilter
        )
      );
    } catch (error) {
      console.error('Failed to get previous launch data: ', error);
    }
  }

  /**
   * @description
   * Get details for a specific launch
   *
   * @param launchNumber Launch number for request
   */
  public getLaunchDetails(launchNumber: string): Observable<any> {
    try {
      const queryUrl = '/launches/';
      let fieldFilter = '?filter=flight_number,launch_date_utc,rocket/rocket_name';
      fieldFilter += ',launch_success,links/flickr_images,details,links/youtube_id';

      return this.http.get(
        this.buildQuery(
          queryUrl + launchNumber,
          fieldFilter
        )
      );
    } catch (error) {
      console.error('Failed to get plaunch detail data: ', error);
    }
  }

  private buildQuery(queryUrl: string, queryString: string): string {
    return API_BASE + queryUrl + '?' + queryString;
  }

}
