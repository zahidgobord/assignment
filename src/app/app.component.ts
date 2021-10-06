import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="Assignment";
  loginStatus = true;
  login(item:boolean){
    this.loginStatus= item;
    
  }

  logout(item2:boolean){
    this.loginStatus = item2;
  }

  
  
}
