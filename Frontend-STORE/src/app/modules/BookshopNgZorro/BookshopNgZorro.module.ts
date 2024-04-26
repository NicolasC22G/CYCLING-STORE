import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookshopNgZorroComponent } from './BookshopNgZorro.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  exports: [
    NzLayoutModule,
    NzButtonModule,
  ],
})
export class BookshopNgZorroModule { }
