import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, Subject } from 'rxjs';

import { ProductCategoryService } from '../product-categories/product-category.service';
import { ProductServiceNew } from './newproduct.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush


})
export class ProductListComponent {

  constructor(private newProductService: ProductServiceNew,
    private productCategoryService: ProductCategoryService) { }

  pageTitle = 'Product List';
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  products$ = combineLatest([
    this.newProductService.productsWithAdd$,
    this.categorySelectedAction$
  ])
    .pipe(
      map(([products, selectedCategoryId]) =>
        products.filter(product =>
          selectedCategoryId ? product.categoryId === selectedCategoryId : true
        )),
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  categories$ = this.productCategoryService.productCategories$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  vm$ = combineLatest([
    this.products$,
    this.categories$
  ])
    .pipe(
      map(([products, categories]) =>
        ({ products, categories }))
    );



  onAdd(): void {
    this.newProductService.addProduct();
  }

  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }
}
