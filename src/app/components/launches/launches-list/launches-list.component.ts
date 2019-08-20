// Angular
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Services
import { SpacexApiService } from 'src/app/services';

// Models
import { LaunchesListItem } from 'src/app/models/launch-models.interface';

@Component({
  selector: 'spx-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss']
})
export class LaunchesListComponent implements OnInit {

  @Output()
  launchSelected = new EventEmitter<string>();

  public launchesList: Array<LaunchesListItem> = [];
  public getMoreLaunchesLoading = false;
  public loadMoreDisabled = false;

  private nextPage: number = 1;

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.getLaunches();
  }

  public onLaunchSelected(launch: string) {
    const launchPage: string = 'launch/' + launch;
    this.launchSelected.emit(launchPage);
  }

  public getMoreLaunches() {
    this.getMoreLaunchesLoading = true;
    this.getLaunches();
  }

  private getLaunches() {
    this.spacexApiService.getPreviousLaunches(this.nextPage).subscribe((response) => {
      if (response.length >= 1) {
        for (const launch of response) {
          this.launchesList.push({
            flightNumber: launch.flight_number,
            launchDate: launch.launch_date_utc,
            rocketName: launch.rocket.rocket_name,
            launchStatus: launch.launch_success
          });
        }
        this.nextPage += 1;
      } else {
        this.loadMoreDisabled = true;
      }
      this.getMoreLaunchesLoading = false;
    });
  }
}
