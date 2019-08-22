// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'spx-launch-detail-page',
  templateUrl: './launch-detail-page.component.html',
  styleUrls: ['./launch-detail-page.component.scss']
})
export class LaunchDetailPageComponent implements OnInit {

  public launchNumber;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.launchNumber = this.route.snapshot.paramMap.get('id');
  }

  /**
   * @description
   * Navigate back to the home screen
   */
  public onBack() {
    this.router.navigate(['home']);
  }

}
