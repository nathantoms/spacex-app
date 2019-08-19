import { Component, OnInit, Input } from '@angular/core';
import { SpacexApiService } from 'src/app/services';

@Component({
  selector: 'spx-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  @Input()
  currentPage: number = 1;

  constructor(private spacexApiService: SpacexApiService) { }

  ngOnInit() {
    this.spacexApiService.getPreviousLaunches(this.currentPage).subscribe((response) => {
      console.log('*nt: response: ', response);
    });
  }
}
