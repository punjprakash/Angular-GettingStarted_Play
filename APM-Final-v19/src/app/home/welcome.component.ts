// welcome.component.ts
import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';

@Component({
  templateUrl: './welcome.component.html',
  standalone: true,
  imports: [NgOptimizedImage,ImageGalleryComponent]
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';

  // Array of product images to display
  public productImages = [
    {
      src: 'https://images.unsplash.com/photo-1600185364827-1b4f94e5f9c7',
      alt: 'Product 1 - Premium Watch',
      width: 400,
      height: 300
    },
    {
      src: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f',
      alt: 'Product 2 - Leather Bag',
      width: 400,
      height: 300
    },
    {
      src: 'https://images.unsplash.com/photo-1593032465171-8ec3a2a1b4c2',
      alt: 'Product 3 - Sunglasses',
      width: 400,
      height: 300
    },
    {
      src: 'https://images.unsplash.com/photo-1592878894634-6c9471f09ff0',
      alt: 'Product 4 - Necklace',
      width: 400,
      height: 300
    },
    {
      src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      alt: 'Product 5 - Smartphone',
      width: 400,
      height: 300
    }
  ];
}
