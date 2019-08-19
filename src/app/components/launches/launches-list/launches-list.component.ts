import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services';

@Component({
  selector: 'spx-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {

  constructor(spacexApiService: SpacexApiService) { }

  ngOnInit() {
  }

}
