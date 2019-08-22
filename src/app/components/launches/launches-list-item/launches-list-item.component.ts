// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Models
import { LaunchesListItem } from 'src/app/models';

@Component({
  selector: 'spx-launches-list-item',
  templateUrl: './launches-list-item.component.html',
  styleUrls: ['./launches-list-item.component.scss']
})
export class LaunchesListItemComponent {

  @Input()
  launch: LaunchesListItem;

  @Output()
  launchSelected = new EventEmitter<number>();

  /**
   * @description
   * Emit flight number of the selected launch item
   */
  public onLaunchSelected() {
    this.launchSelected.emit(this.launch.flightNumber);
  }
}
