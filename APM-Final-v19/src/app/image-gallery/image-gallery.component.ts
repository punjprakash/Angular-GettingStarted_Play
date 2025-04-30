import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from '../image-card/image-card.component';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  // Create 5 rows with 3 images each
  imageRows = [
    // Row 1
    [
      { src: '../../assets/images/Lazy/img1.jpg', alt: 'Image 1', title: 'Nature View 1' },
      { src: '../../assets/images/Lazy/img2.jpg', alt: 'Image 2', title: 'Nature View 2' },
      { src: '../../assets/images/Lazy/img3.jpg', alt: 'Image 3', title: 'Nature View 3' }
    ],
    // Row 2
    [
      { src: '../../assets/images/Lazy/img4.jpg', alt: 'Image 4', title: 'City View 1' },
      { src: '../../assets/images/Lazy/img5.jpg', alt: 'Image 5', title: 'City View 2' },
      { src: '../../assets/images/Lazy/img6.jpg', alt: 'Image 6', title: 'City View 3' }
    ],
    // Row 3
    [
      { src: '../../assets/images/Lazy/img7.jpg', alt: 'Image 7', title: 'Beach View 1' },
      { src: '../../assets/images/Lazy/img8.jpg', alt: 'Image 8', title: 'Beach View 2' },
      { src: '../../assets/images/Lazy/img9.jpg', alt: 'Image 9', title: 'Beach View 3' }
    ],
    // Row 4
    [
      { src: '../../assets/images/Lazy/img10.jpg', alt: 'Image 10', title: 'Mountain View 1' },
      { src: '../../assets/images/Lazy/img11.jpg', alt: 'Image 11', title: 'Mountain View 2' },
      { src: '../../assets/images/Lazy/img12.jpg', alt: 'Image 12', title: 'Mountain View 3' }
    ],
    // Row 5
    [
      { src: '../../assets/images/Lazy/img13.jpg', alt: 'Image 13', title: 'Forest View 1' },
      { src: '../../assets/images/Lazy/img14.jpg', alt: 'Image 14', title: 'Forest View 2' },
      { src: '../../assets/images/Lazy/img15.jpg', alt: 'Image 15', title: 'Forest View 3' }
    ]
  ];
}
