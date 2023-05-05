import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { UsersData } from '../UsersData';
import { Users } from 'src/app/UserInterface';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent {

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
