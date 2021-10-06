import { Component, OnInit } from '@angular/core';
import {UserdataService} from 'src/app/services/userdata.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  userd:any;
  constructor(private userData:UserdataService){
    
    
    this.userd=userData.users();
  }

  ngOnInit(): void {
  }


}