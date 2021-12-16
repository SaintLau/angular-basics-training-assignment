import { Component } from '@angular/core';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowDetail = false;
  detail = [];


  onToggleDetails(){
    this.allowDetail = !this.allowDetail;
    //this.detail.push(this.detail.length + 1);

    //other way of increment number:
    this.detail.push(new Date());
  }
}
