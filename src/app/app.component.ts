import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  serverWasCreated(server:{name:string,type:string,content:string}){
    this.serverElements.push(server);
  }
  blueprintWasCreated(blueprint:{name:string,type:string,content:string}){
    this.serverElements.push(blueprint);
  }
}
