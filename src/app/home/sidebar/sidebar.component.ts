import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() projectEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() userEvent: EventEmitter<boolean> = new EventEmitter();
  constructor(
   
  ) { }
  
  ngOnInit(): void {
  }
  
}
