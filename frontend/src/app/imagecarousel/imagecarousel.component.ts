import { Component } from '@angular/core';

@Component({
  selector: 'app-imagecarousel',
  templateUrl: './imagecarousel.component.html',
  styleUrls: ['./imagecarousel.component.css']
})
export class ImagecarouselComponent {
  slides = [
    { id: 1, image: 'assets/images/image1.jpg', alt: 'First Slide' },
    { id: 2, image: 'assets/images/image2.jpg', alt: 'Second Slide' },
    { id: 3, image: 'assets/images/image3.jpg', alt: 'Third Slide' },
  ];
}
