// Angular
import { Component, Input } from '@angular/core';

@Component({
  selector: 'spx-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {

  @Input()
  imageUrls: string[];

}
