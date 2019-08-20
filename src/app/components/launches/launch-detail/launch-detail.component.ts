// Angular
import { Component, Input } from '@angular/core';

// Models
import { LaunchDetails } from 'src/app/models/launch-models.interface';

@Component({
  selector: 'spx-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent {

  @Input()
  launch: LaunchDetails;

}
