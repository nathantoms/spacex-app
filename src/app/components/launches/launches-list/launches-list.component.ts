import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from 'src/app/services';
import { LaunchesListItem } from 'src/app/models/launch-models.interface';

@Component({
  selector: 'spx-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  public launchesList: Array<LaunchesListItem> = [];
  public getMoreLaunchesLoading = false;

  private currentPage: number = 1;

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.getLaunches();
  }

  public getMoreLaunches() {
    this.getMoreLaunchesLoading = true;
    this.currentPage += 1;
    this.getLaunches();
  }

  private getLaunches() {
    this.spacexApiService.getPreviousLaunches(this.currentPage).subscribe((response) => {
      for (const launch of response) {
        this.launchesList.push({
          flightNumber: launch.flight_number,
          launchDate: launch.launch_date_utc,
          rocketName: launch.rocket.rocket_name,
          launchStatus: launch.launch_success
        });
      }
      this.getMoreLaunchesLoading = false;
    });
  }
}
