import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  serverName = '';
  serverContent = '';
  @Output() serverCreated = new EventEmitter<{name:string,content:string,type:string}>();
  @Output('bpCreated') bluprintCreated = new EventEmitter<{name:string,content:string,type:string}>();
  constructor() { }

  ngOnInit() {
  }

  addServer(){
    this.serverCreated.emit({
      name:this.serverName,
      type:'server',
      content:this.serverContent
    });
  }

  addBluprint(){
    this.bluprintCreated.emit({
      name:this.serverName,
      type:'bluprint',
      content:this.serverContent
    });
  }
}
