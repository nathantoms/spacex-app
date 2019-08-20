
// Angular
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spx-loading-spinner',
  templateUrl: './loading-spinner.component.html'
})
export class LoadingSpinnerComponent {

  @Input()
  loading: boolean;

}
