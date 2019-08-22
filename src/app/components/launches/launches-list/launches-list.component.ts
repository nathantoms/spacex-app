// Angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Services
import { SpacexApiService } from 'src/app/services';

// Models
import { LaunchesListItem } from 'src/app/models';

@Component({
  selector: 'spx-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss']
})
export class LaunchesListComponent implements OnInit {

  @Output()
  launchSelected = new EventEmitter<string>();

  public launchesList: Array<LaunchesListItem> = [];
  public launchesLoading  = false;
  public loadMoreDisabled = false;

  private nextPage: number = 1;

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.getMoreLaunches();
  }

  /**
   * @description
   * Return the URL for the specified launch
   *
   * @param launch Launch Number
   */
  public onLaunchSelected(launch: string) {
    const launchPage: string = 'launch/' + launch;
    this.launchSelected.emit(launchPage);
  }

  /**
   * @description
   * Get more launch information
   */
  public getMoreLaunches() {
    this.launchesLoading = true;
    this.spacexApiService.getPreviousLaunches(this.nextPage).subscribe((response) => {
      if (response.length >= 1) {
        for (const launch of response) {
          const launchDetail = this.getLaunchModel(launch);
          this.launchesList = [...this.launchesList, launchDetail];
        }
        this.nextPage += 1;
      } else {
        this.loadMoreDisabled = true;
      }
      this.launchesLoading = false;
    });
  }

  private getLaunchModel(launch: any): LaunchesListItem {
      return {
        flightNumber: launch.flight_number,
        launchDate: launch.launch_date_utc,
        rocketName: launch.rocket.rocket_name,
        launchStatus: launch.launch_success
      };
  }
}
