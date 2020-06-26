import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images = [
    { url: 'BLUE-BMW.jpg', desc: 'A blue BMW'},
    { url: 'FIAT-COLOUR.jpg', desc: 'A brightly coloured Fiat'},
    { url: 'LONDON-TAXI.jpg', desc: 'A taxi in London'},
    { url: 'OLD-ALFA-ROMEO.jpg', desc: 'An old Alfa Romeo'},
    { url: 'OLD-CITROEN.jpg', desc: 'An old Citroen'},
    { url: 'OLD-DODGE-RAM.jpg', desc: 'An old Dodge Ram in Nashville'},
    { url: 'OLD-FIAT.jpg', desc: 'An old Fiat'},
    { url: 'OLD-SPORTS-CAR-2.jpg', desc: 'An old sports car'},
    { url: 'OLDTIMER.jpg', desc: 'An old rover car in London'},
    { url: 'OLD-VOLVO-2.jpg', desc: 'An old volvo'},
    { url: 'SUZUKI-OFFROAD.jpg', desc: 'A Suzuki offroad car'},
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
