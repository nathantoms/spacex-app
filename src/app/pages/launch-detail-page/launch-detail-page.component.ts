// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { SpacexApiService } from 'src/app/services';

// Models
import { LaunchDetails } from 'src/app/models/launch-models.interface';

@Component({
  selector: 'spx-launch-detail-page',
  templateUrl: './launch-detail-page.component.html',
  styleUrls: ['./launch-detail-page.component.scss']
})
export class LaunchDetailPageComponent implements OnInit {

  public launchLoading = false;
  public launchDate: string;
  public launchDetails: LaunchDetails;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexApiService: SpacexApiService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getLaunchDetails(id);
  }

  /**
   * @description
   * Navigate back to the home screen
   */
  public onBack() {
    this.router.navigate(['home']);
  }

  private getLaunchDetails(id: string) {
    this.launchLoading = true;
    this.spacexApiService.getLaunchDetails(id).subscribe((response) => {
      this.launchDetails = this.getLaunchDetailModel(response);
      this.launchLoading = false;
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
