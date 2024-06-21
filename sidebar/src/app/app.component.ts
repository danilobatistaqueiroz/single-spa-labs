import { Component, ElementRef, ViewChild } from '@angular/core';
import { assetUrl } from "../single-spa/asset-url";

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sidebar';

  img_car = assetUrl("img_car.jpg");

  @ViewChild("sidebar")
  sidebar!: ElementRef<HTMLDivElement>;

  w3_open() {
    this.sidebar.nativeElement.style.display = "block";
  }
  
  w3_close() {
    this.sidebar.nativeElement.style.display = "none";
  }
}
