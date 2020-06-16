import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './pages/images/images.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ImagesModule } from './pages/images/images.module';


const routes: Routes = [
  { path: 'images', loadChildren: () => import('./pages/images/images.module').then(m => m.ImagesModule) },
  { path: 'videos', component: VideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
