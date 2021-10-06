import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormGroup,FormControl,FormControlName, Validators } from '@angular/forms';
import {Router,RouterModule} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  ) { }
  @Output() loginEvent: EventEmitter<boolean> = new EventEmitter();
  ngOnInit(): void {
  }

  title = 'assignment';
  username = "zahid@test.com";
  password = "123456";
  sucess = false;
  
  notsucess = true;
  loginForm1 = new FormGroup(
    {
      user:new FormControl('',[Validators.required,Validators.email]),
      password1:new FormControl('',[Validators.required]),
    }
  )
  
  get user(){
    return this.loginForm1.get('user');
  }

  get password1(){
    return this.loginForm1.get('password1');
  }

  credential(){
    if (this.username == this.loginForm1.value.user && this.password == this.loginForm1.value.password1) {
      this.sucess = true;
      this.notsucess = false;
      this.loginEvent.emit(false);
      
      
      
      
      
    } else {
      
      this.sucess = false;
      this.notsucess = true;
      this.loginEvent.emit(true);
      alert("Incorrect Credential");
      
    }

  }
  
  
}
