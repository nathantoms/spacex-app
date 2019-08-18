import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE = 'https://api.spacexdata.com/v3';
const LAUNCH_LIST_SIZE = 10;


@Injectable()
export class SpacexApiService {

  constructor(private http: HttpClient) { }

  public getPreviousLaunches(page: number): Observable<any> {
    try {
      const queryUrl = '/launches/past';

      const recordLimit = 'limit=' + LAUNCH_LIST_SIZE;
      const offset = '&offset=' + (LAUNCH_LIST_SIZE * (page - 1));
      const order = '&order=desc';
      const fieldFilter = '&filter=flight_number,launch_date_utc,rocket/rocket_name';

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

  public getLaunchDetails(launchNumber: string): Observable<any> {
    try {
      const queryUrl = '/launches/';

      return this.http.get(
        this.buildQuery(
          queryUrl + launchNumber,
          ''
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
