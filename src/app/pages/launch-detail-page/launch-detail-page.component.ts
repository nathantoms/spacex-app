// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { SpacexApiService } from 'src/app/services';

@Component({
  selector: 'spx-launch-detail-page',
  templateUrl: './launch-detail-page.component.html',
  styleUrls: ['./launch-detail-page.component.scss']
})
export class LaunchDetailPageComponent implements OnInit {



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spacexApiService: SpacexApiService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

  }

}
