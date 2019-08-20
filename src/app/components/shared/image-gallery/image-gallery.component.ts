// Angular
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spx-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  @Input()
  imageUrls: string[];

  constructor() { }

  ngOnInit() {
    console.log('*nt: imageUrls: ', this.imageUrls);
  }

}
