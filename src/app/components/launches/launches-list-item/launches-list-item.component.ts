import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LaunchesListItem } from 'src/app/models/launch-models.interface';

@Component({
  selector: 'spx-launches-list-item',
  templateUrl: './launches-list-item.component.html',
  styleUrls: ['./launches-list-item.component.css']
})
export class LaunchesListItemComponent {

  @Input()
  launch: LaunchesListItem;

  @Output()
  selectLaunch = new EventEmitter<number>();

  public onSelectLaunch() {
    this.selectLaunch.emit(this.launch.flightNumber);
  }
}
