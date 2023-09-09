import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  images: string[] = [
    '../assets/img-1.webp',
    '../assets/img-2.jpg',
    '../assets/img-3.jpg',
    // Add more image URLs here
  ];
  currentImageIndex: number = 0;
  currentImage: string = this.images[this.currentImageIndex];

  constructor() {}

  ngOnInit(): void {
    this.startChangingImages();
  }

  startChangingImages(): void {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
      console.log(this.currentImage);
    }, 5000); // Change image every 5 seconds
  }
}
