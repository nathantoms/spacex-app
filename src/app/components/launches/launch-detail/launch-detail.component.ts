// Angular
import { Component, Input, OnInit } from '@angular/core';

// Models
import { LaunchDetails } from 'src/app/models/launch-models.interface';

// Services
import { SpacexApiService } from 'src/app/services';

@Component({
  selector: 'spx-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent implements OnInit {

  constructor(
    private spacexApiService: SpacexApiService
  ) { }

  @Input()
  launchNumber: number;

  public launchLoading = false;
  public launch: LaunchDetails;

  ngOnInit() {
    if (this.launchNumber) {
      this.getLaunchDetails(this.launchNumber.toString());
    }
  }

  private getLaunchDetails(id: string) {
    this.launchLoading = true;
    this.spacexApiService.getLaunchDetails(id).subscribe((response: any) => {
      if (response) {
        this.launch = this.getLaunchDetailModel(response);
        this.launchLoading = false;
      } else {
        console.log('No response for Launch details: ', id);
      }
    });
  }

  private getLaunchDetailModel(launch: any): LaunchDetails {
    return {
      flightNumber: launch.flight_number,
      launchDate: launch.launch_date_utc,
      rocketName: launch.rocket.rocket_name,
      launchStatus: launch.launch_success,
      images: launch.links.flickr_images,
      details: launch.details,
      videoId: launch.links.youtube_id
    };
  }

}
