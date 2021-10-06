import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
// import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  
  constructor() { }
  @Output() loginEvent:EventEmitter<boolean> = new EventEmitter();
  ngOnInit(): void {
  }

  logout(){
    this.loginEvent.emit(true);
    
  }
  
}
