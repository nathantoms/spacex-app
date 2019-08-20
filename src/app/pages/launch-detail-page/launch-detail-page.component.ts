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

  public launchDetails: LaunchDetails;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexApiService: SpacexApiService
  ) { }

  ngOnInit() {
    console.log('*nt: hello');
    const id = this.route.snapshot.paramMap.get('id');
    this.getLaunchDetails(id);
  }

  public onBack() {
    this.router.navigate(['home']);
  }

  private getLaunchDetails(id: string) {
    this.spacexApiService.getLaunchDetails(id).subscribe((response) => {
      this.launchDetails = {
        flightNumber: response.flight_number,
        launchDate: response.launch_date_utc,
        rocketName: response.rocket.rocket_name,
        launchStatus: response.launch_success,
        images: response.links.flickr_images
      };
      console.log('*nt: this.launchDetails: ', this.launchDetails.images);
    });
  }

}
