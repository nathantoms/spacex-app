import { Component, Input } from '@angular/core';

@Component({
  selector: 'spx-launch-success-indicator',
  templateUrl: './launch-success-indicator.component.html',
  styleUrls: ['./launch-success-indicator.component.scss']
})
export class LaunchSuccessIndicatorComponent {

  @Input()
  success: boolean;

}
