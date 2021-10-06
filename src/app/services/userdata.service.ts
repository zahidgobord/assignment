import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {id : 1,name:'zahid',age:23,email:'zahid@Test.com'},
      {id : 2,name:'nixon',age:23,email:'nixon@Test.com'},
      {id : 3,name:'yogesh',age:23,email:'yogesh@Test.com'},
      {id : 4,name:'mayur',age:23,email:'mayur@Test.com'},
    ]
  }
}
