import { PhotosService } from './../photos.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string;
  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}
  fetchPhoto(): void {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
  onClick(): void {
    this.fetchPhoto();
  }
}
