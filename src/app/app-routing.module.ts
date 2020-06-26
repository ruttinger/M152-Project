import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './pages/images/images.component';
import { VideosComponent } from './pages/videos/videos.component';
import { AudioComponent } from './pages/audio/audio.component';


const routes: Routes = [
  { path: 'images', component: ImagesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'audio', component: AudioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
