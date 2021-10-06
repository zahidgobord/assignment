import { Component, OnInit } from '@angular/core';
import {UserdataService} from 'src/app/services/userdata.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userd:any;
  constructor(private userData:UserdataService){
    
    
    this.userd=userData.users();
  }

  ngOnInit(): void {
  }

}
