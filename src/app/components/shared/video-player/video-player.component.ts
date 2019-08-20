// Angular
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'spx-video-player',
  templateUrl: './video-player.component.html'
})
export class VideoPlayerComponent {
  private videoBaseUrl = 'https://www.youtube.com/embed/';

  @Input()
  videoId: string;

  constructor(private sanitiser: DomSanitizer) { }

  /**
   * @description
   * Get the video url for embedding youtube video
   */
  public getVideoUrl() {
    return this.sanitiser.bypassSecurityTrustResourceUrl(this.videoBaseUrl + this.videoId);
  }

}
