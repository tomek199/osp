import { Component, OnInit } from '@angular/core';
import { Gallery as GalleryModule, GalleryItem, ImageItem } from "@ngx-gallery/core";
import galleries from '../../assets/static/gallery.json';
import { ActivatedRoute } from "@angular/router";
import { Gallery } from "../gallery/gallery.model";

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {

  gallery: Gallery;
  images: GalleryItem[];

  constructor(private route: ActivatedRoute,
              private galleryModule: GalleryModule) { }


  ngOnInit() {
    this.getGallery();
    if (this.gallery) {
      this.initGallery();
    }
  }

  private getGallery() {
    const galleryId = this.route.snapshot.paramMap.get('id');
    this.gallery = galleries.gallery.find(gallery => gallery.id == galleryId);
  }

  private initGallery() {
    this.images = [];
    for (let i = 1; i <= this.gallery.count; i++) {
      this.images.push(new ImageItem({
        src: `../../assets/images/gallery/${this.gallery.id}/images/${i}.jpg`,
        thumb: `../../assets/images/gallery/${this.gallery.id}/thumbs/${i}.jpg`
      }));
    }
    const galleryRef = this.galleryModule.ref(this.gallery.id);
    galleryRef.load(this.images);
  }
}
