import { Injectable } from '@angular/core';
import {UsersData} from './UsersData'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userId?:any;
  users=UsersData ;


  constructor(private route:ActivatedRoute) { 
    let users=UsersData ;
    console.log(users);
  }




  getData(){
    return UsersData;
  };

  getDataById(){
    let user = this.users.map( (data)=>{
      console.log(data);
      console.log(this.userId);

    })
  }
}
