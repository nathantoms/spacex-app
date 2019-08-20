// Angular
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spx-image-gallery',
  templateUrl: './image-gallery.component.html'
})
export class ImageGalleryComponent {

  @Input()
  imageUrls: string[];

}
