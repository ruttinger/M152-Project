import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImagesComponent } from './images.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ImagesComponent
      }
    ])
  ],
  declarations: [ImagesComponent]
})
export class ImagesModule { }
