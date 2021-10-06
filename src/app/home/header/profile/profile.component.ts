import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators,FormControlName} from '@angular/forms'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup(
    {
      firstname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      lastname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      username:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]+$')]),
      city:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      state:new FormControl('',[Validators.required]),
      zip:new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
    }
  )
  get firstname(){
    return this.profileForm.get('firstname');
  }
  get lastname(){
    return this.profileForm.get('lastname');
  }
  get username(){
    return this.profileForm.get('username');
  }
  get city(){
    return this.profileForm.get('city');
  }
  get state(){
    return this.profileForm.get('state');
  }
  get zip(){
    return this.profileForm.get('zip');
  }
  ngOnInit(): void {
  }
  profilesubmit(){
    alert("form submitted");
  }

}
