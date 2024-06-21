import { Component, ViewChild } from '@angular/core';

declare var System: any;
let PageHeader = () => System.import("@labs/styleguide");
let shared = () => System.import('@labs/shared-auth');

@Component({
  selector: 'topbar',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'topbar';
  @ViewChild("pageHeader") pageHeader?:HTMLDivElement;
  
  constructor(){
    console.log(shared().then((x:any) => console.log(x.publicApiFunction())));
    PageHeader().then((x:any) => {
      // let pgheader = document.querySelector('#page-header');
      // if(pgheader){
      //   pgheader.innerHTML = x.PageHeader
      // }
      if(this.pageHeader != null)
        this.pageHeader.innerHTML = x.PageHeader;
    });
    
  }
  
}
