import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './components/public.component';
import { BookshopNgZorroModule } from '../BookshopNgZorro/BookshopNgZorro.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeRoutingModule } from './public-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookshopNgZorroModule,
    HomeRoutingModule
  ],
  declarations: [PublicComponent]
})
export class PublicModule { }
