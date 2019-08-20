// Angular
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

// Models
import { LaunchesListItem } from 'src/app/models/launch-models.interface';

// Services
import * as DateFormatter from 'date-and-time';

@Component({
  selector: 'spx-launches-list-item',
  templateUrl: './launches-list-item.component.html',
  styleUrls: ['./launches-list-item.component.scss']
})
export class LaunchesListItemComponent implements OnChanges {

  public launchDate: string;

  @Input()
  launch: LaunchesListItem;

  @Output()
  launchSelected = new EventEmitter<number>();

  ngOnChanges() {
    if (this.launch) {
      const launchDate = new Date(this.launch.launchDate);
      this.launchDate = DateFormatter.format(launchDate, 'ddd DD MMM \'YY');
    }
  }

  /**
   * @description
   * Emit flight number of the selected launch item
   */
  public onLaunchSelected() {
    this.launchSelected.emit(this.launch.flightNumber);
  }
}
