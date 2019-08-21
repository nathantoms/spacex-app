// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { SpacexApiService } from 'src/app/services';

@Component({
  selector: 'spx-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(
    private router: Router,
    private spacexApiService: SpacexApiService
  ) { }

  /**
   * @description
   * Navigate to a given page
   *
   * @param page URL of page
   */
  public onNavigate(page: string) {
    this.router.navigate([page]);
  }

}
