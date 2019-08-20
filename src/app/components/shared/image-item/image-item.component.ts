import { Component, Input } from '@angular/core';

@Component({
  selector: 'spx-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent {

  @Input()
  imageUrl: string;

  public imageLoading: boolean = true;

  public onImageLoaded() {
    console.log('loaded: ', this.imageUrl);
    this.imageLoading = false;
  }

}
