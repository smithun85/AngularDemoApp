import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { UsersService } from '../users.service';
import { Users } from '../UserInterface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private user:UsersService
  ){}

  public userId?:any;

  userData?:any
  ngOnInit(){

   

    // console.log('param1:',this.route.snapshot.queryParams);
    //  console.log('param2:',this.route.snapshot.queryParamMap);
    //   console.log('Params3:',this.route.snapshot.paramMap);
    // console.log(this.route.snapshot.fragment);//null


    let id = this.route.snapshot.paramMap.get('id')
    console.log("paramsId",id);
    this.userId=id

    this.userData = this.user.getDataById();
    console.log(this.userData);
    

    // or

    // this.route.paramMap.subscribe( (params:ParamMap) => {
    //   console.log("Parameter",params) //params:{id: '1'}
    //   let id = params.get('id');
    //   console.log(id);
    //   this.userId=id
    // })

    //QueryParameter:Using queryParams
  //   this.route.queryParams.subscribe( (params) => {
  //     console.log("Parameter",params) //params:{id: '1'}
  //     this.userId=params['userId'];
  //  })

    //   // QueryParameter:Using queryParamMap
    //   this.route.queryParamMap.subscribe( (params) => {
    //     console.log("Parameter",params) //params:{id: '1'}
    //     // this.userId=params.get('id');
    //    this.userId={ ...params.keys, ...params };
    // })
   
  }

  gotoUsers():void{
    this.router.navigate(['/users'])
  }

}
