import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myInputMessage:string ="I am the parent comppnent";
  
  
  
  constructor(){

  }
  getdata(data: any){
console.log(data);
  }
}
  

