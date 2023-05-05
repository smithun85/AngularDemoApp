import { Component } from '@angular/core';
// import { UsersData } from '../UsersData';
import { Users } from '../UserInterface';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

//  users = UsersData;

//OR: get user_data using service============================
users?:Users[]

 constructor(private router:Router, private userService:UsersService){ }

 ngOnInit(){
  this.users=this.userService.getData()
 }
//====================================================
 onSelect(userData:Users){
  console.log(userData);
  this.router.navigate(['/users',userData.id])

   //QueryParameter
  //  this.router.navigate(['/users', user.id],{queryParams:{userId:user.id, name:user.name}})
  // this.router.navigate(['/userDetail'],{queryParams:{userId:user.id, name:user.name}})
  
 }

}
