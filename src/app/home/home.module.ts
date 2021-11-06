import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { CropWordsPipe } from './crop-words.pipe';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, MovieComponent, CropWordsPipe, LoaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule {}
