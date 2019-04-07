import { Component, OnInit } from '@angular/core';
import galleries from '../../assets/static/gallery.json'
import { Gallery } from "./gallery.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleries: Gallery[];

  constructor() { }

  ngOnInit() {
    this.galleries = galleries.gallery;
  }
}
