// Angular
import { Component, OnInit, Input } from '@angular/core';

// Models
import { LaunchDetails } from 'src/app/models/launch-models.interface';

// Services
import * as DateFormatter from 'date-and-time';


@Component({
  selector: 'spx-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent implements OnInit {

  @Input()
  launch: LaunchDetails;

  public launchDate: string;

  ngOnInit() {
    if (this.launch) {
      const launchDate = new Date(this.launch.launchDate);
      this.launchDate = DateFormatter.format(launchDate, 'ddd DD MMM YYYY');
    }
  }

}
