import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnChanges {
  @Input() image!: { src: string, alt: string, title: string };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['image'] && changes['image'].currentValue) {
      const { src, alt, title } = changes['image'].currentValue;
      console.log('Image src:', src);
    }
  }
}
