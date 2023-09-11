import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  change: string =
    'Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  changetitle: string = 'AKLIMA - COO, AMERIMAR ENTERPRISES, INC.';
  name: string = 'AKLIMA';
  // ---
  call() {
    this.name = 'AKLIMA';
    this.changetitle = '- COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }
  call2() {
    this.name = 'FATIMA ASRAFY';
    this.changetitle = ' - COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }
  call3() {
    this.name = 'JANNAT TUMPA';
    this.changetitle = ' - COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }
  call4() {
    this.name = 'JOHNS DUE';
    this.changetitle = ' - COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }
  call5() {
    this.name = 'JOHN DOE';
    this.changetitle = ' - COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }
  call6() {
    this.name = 'AMAR ORTHI';
    this.changetitle = ' - COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }
  call7() {
    this.name = 'FATIMA MA';
    this.changetitle = ' - COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }
  call8() {
    this.name = 'JON CUMMINS';
    this.changetitle = ' - COO, AMERIMAR ENTERPRISES, INC.';
    this.change =
      'Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.';
  }

  images: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVLJ2Ta9BM-CNmiyRC69dXVQthq2mkfKANQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDKRck1-ZcbwBR7Cd3atsbj_g6aT3CBQNnw',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5zVWv9E-wxo1MvKUg67F6KHtzkbFHeS_nLl8eKN3WLmgsyn8X',
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
